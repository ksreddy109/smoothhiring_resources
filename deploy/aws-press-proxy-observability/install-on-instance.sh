#!/usr/bin/env bash
set -euo pipefail
if ! command -v aws >/dev/null 2>&1; then
  apt-get update -qq
  DEBIAN_FRONTEND=noninteractive apt-get install -y awscli
fi
ARCH="$(uname -m)"
if [[ "$ARCH" == "aarch64" ]]; then
  CW_PKG_URL="https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/arm64/latest/amazon-cloudwatch-agent.deb"
else
  CW_PKG_URL="https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb"
fi
TMPDEB="$(mktemp)"
curl -fsSL "$CW_PKG_URL" -o "$TMPDEB"
dpkg -i "$TMPDEB" || apt-get install -y -f
rm -f "$TMPDEB"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CFG_SRC="${SCRIPT_DIR}/amazon-cloudwatch-agent.json"
if [[ ! -f "$CFG_SRC" ]]; then
  echo "amazon-cloudwatch-agent.json must live next to this script (copy both to the server)."
  exit 1
fi
install -m 0644 "$CFG_SRC" /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json
/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json
if systemctl list-unit-files | grep -q '^amazon-ssm-agent\.service'; then
  systemctl enable amazon-ssm-agent
  systemctl restart amazon-ssm-agent
elif snap list amazon-ssm-agent 2>/dev/null | grep -q amazon-ssm-agent; then
  snap start amazon-ssm-agent || true
else
  apt-get update -qq
  DEBIAN_FRONTEND=noninteractive apt-get install -y amazon-ssm-agent
  systemctl enable amazon-ssm-agent
  systemctl restart amazon-ssm-agent
fi
IID="$(curl -fsS --max-time 2 http://169.254.169.254/latest/meta-data/instance-id 2>/dev/null || true)"
echo "Done. From your laptop verify SSM: aws ssm describe-instance-information --filters Key=InstanceIds,Values=${IID:-$INSTANCE_ID}"
