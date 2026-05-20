import base64
import json
import os

import boto3

INSTANCE_ID = os.environ["INSTANCE_ID"]
BUCKET = os.environ["FORENSICS_BUCKET"]
REGION = os.environ["AWS_REGION_NAME"]
ssm = boto3.client("ssm", region_name=REGION)


def handler(event, context):
    for rec in event.get("Records", []):
        raw = rec["Sns"]["Message"]
        try:
            msg = json.loads(raw)
        except json.JSONDecodeError:
            continue
        if msg.get("NewStateValue") != "ALARM":
            continue
        rid = context.aws_request_id.replace("-", "")[:12]
        meta = json.dumps(
            {
                "AlarmName": msg.get("AlarmName", ""),
                "NewStateReason": msg.get("NewStateReason", ""),
                "Region": REGION,
            }
        )
        meta_b64 = base64.b64encode(meta.encode("utf-8")).decode("ascii")
        script = "\n".join(
            [
                "#!/bin/bash",
                "set +e",
                "echo %s | base64 -d >/tmp/alarm-meta.json" % meta_b64,
                "OUT=/tmp/forensic-%s.txt" % rid,
                "(",
                "  echo === alarm meta ===; cat /tmp/alarm-meta.json; echo",
                "  echo === utc ===; date -u",
                "  echo === uptime ===; uptime",
                "  echo === free ===; free -h 2>/dev/null || true",
                "  echo === df ===; df -h 2>/dev/null || true",
                "  echo === dmesg tail ===; dmesg -T 2>/dev/null | tail -n 120 || true",
                "  echo === journal err 45m ===; journalctl -p err..alert --since '45 minutes ago' --no-pager 2>/dev/null | tail -n 200 || true",
                "  echo === journal docker 45m ===; journalctl -u docker --since '45 minutes ago' --no-pager 2>/dev/null | tail -n 120 || true",
                "  echo === docker ps ===; docker ps -a 2>/dev/null || true",
                "  for cid in $(docker ps -aq 2>/dev/null | head -n 20); do",
                "    echo === docker logs $cid tail 80 ===",
                "    docker logs --tail 80 \"$cid\" 2>/dev/null || true",
                "  done",
                "  echo === ss listening ===; ss -tlnp 2>/dev/null | head -n 50 || true",
                ") > \"$OUT\" 2>&1",
                "aws s3 cp \"$OUT\" s3://%s/forensics/%s-%s.txt --region %s"
                % (BUCKET, INSTANCE_ID, rid, REGION),
                "rm -f \"$OUT\" /tmp/alarm-meta.json",
            ]
        )
        ssm.send_command(
            InstanceIds=[INSTANCE_ID],
            DocumentName="AWS-RunShellScript",
            Parameters=dict(commands=[script]),
            Comment="CloudWatch alarm forensic snapshot",
            TimeoutSeconds=300,
        )
    return dict(ok=True)
