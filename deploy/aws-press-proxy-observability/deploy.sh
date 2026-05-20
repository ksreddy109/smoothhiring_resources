#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
REGION="${AWS_REGION:-$(aws configure get region)}"
REGION="${REGION:-us-east-1}"
STACK="${STACK_NAME:-smoothhrms-proxy-observability}"
INSTANCE_ID="${PROXY_INSTANCE_ID:-i-0c932528bd77e2164}"
ACCOUNT_ID="$(aws sts get-caller-identity --query Account --output text)"
CODE_BUCKET="${LAMBDA_CODE_BUCKET:-smoothhrms-cfn-artifacts-${ACCOUNT_ID}-${REGION}}"
CODE_KEY="${LAMBDA_CODE_KEY:-smoothhrms-proxy-observability/lambda_forensics.zip}"
TOPIC_ARN="${ALARM_SNS_TOPIC_ARN:-arn:aws:sns:${REGION}:${ACCOUNT_ID}:smoothhrms-proxy-n-ec2-status}"

if ! aws s3api head-bucket --bucket "$CODE_BUCKET" 2>/dev/null; then
  aws s3 mb "s3://${CODE_BUCKET}" --region "$REGION"
fi

WORKDIR="$(mktemp -d)"
ZIPPATH="${WORKDIR}/lambda_forensics.zip"
(
  cd "$DIR"
  zip -q "$ZIPPATH" lambda_forensics.py
)
aws s3 cp "$ZIPPATH" "s3://${CODE_BUCKET}/${CODE_KEY}" --region "$REGION"
rm -rf "$WORKDIR"

aws cloudformation deploy \
  --region "$REGION" \
  --stack-name "$STACK" \
  --template-file "${DIR}/template.yaml" \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
    "ProxyInstanceId=${INSTANCE_ID}" \
    "AlarmSnsTopicArn=${TOPIC_ARN}" \
    "LambdaCodeBucket=${CODE_BUCKET}" \
    "LambdaCodeKey=${CODE_KEY}"

PROFILE_NAME="$(aws cloudformation describe-stacks --region "$REGION" --stack-name "$STACK" --query 'Stacks[0].Outputs[?OutputKey==`InstanceProfileName`].OutputValue' --output text)"
ASSOC_JSON="$(aws ec2 describe-iam-instance-profile-associations --region "$REGION" --filters "Name=instance-id,Values=${INSTANCE_ID}" --output json)"
ASSOC_ID="$(echo "$ASSOC_JSON" | python3 -c "import json,sys; d=json.load(sys.stdin); a=d.get('IamInstanceProfileAssociations') or []; print(a[0]['AssociationId'] if a else '')")"
CUR_ARN="$(echo "$ASSOC_JSON" | python3 -c "import json,sys; d=json.load(sys.stdin); a=d.get('IamInstanceProfileAssociations') or []; print(a[0]['IamInstanceProfile']['Arn'] if a else '')")"
NEW_ARN="$(aws iam get-instance-profile --instance-profile-name "$PROFILE_NAME" --query 'InstanceProfile.Arn' --output text)"
if [[ -z "$ASSOC_ID" ]]; then
  aws ec2 associate-iam-instance-profile --region "$REGION" --instance-id "$INSTANCE_ID" --iam-instance-profile "Name=${PROFILE_NAME}"
elif [[ "$CUR_ARN" == "$NEW_ARN" ]]; then
  echo "Instance already uses profile ${PROFILE_NAME}"
else
  echo "Instance has a different instance profile (${CUR_ARN}). Disassociate then re-run, or attach ${NEW_ARN} manually."
  exit 1
fi

BUCKET_OUT="$(aws cloudformation describe-stacks --region "$REGION" --stack-name "$STACK" --query 'Stacks[0].Outputs[?OutputKey==`ForensicsBucketName`].OutputValue' --output text)"
echo "Stack outputs: forensics bucket=${BUCKET_OUT} profile=${PROFILE_NAME}"
echo "On the proxy (SSH), run: sudo bash install-on-instance.sh"
