#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
UI="${1:-$ROOT/../smooth_ui}"
BUCKET="${S3_RESOURCES_BUCKET:-smoothhiring-resources-production}"
DIST="${CLOUDFRONT_DISTRIBUTION_ID:-E185ZBO2WGN7JH}"
if [ ! -f "$UI/package.json" ]; then
  echo "smooth-ui not at $UI" >&2
  exit 1
fi
(
  cd "$UI"
  npm ci
  npm run build
)
(
  cd "$ROOT"
  npm ci
  npm run build
)
if [ "${S3_SYNC_DELETE:-}" = "1" ] || [ "${S3_SYNC_DELETE:-}" = "true" ]; then
  aws s3 sync "$ROOT/out" "s3://${BUCKET}/" --delete
else
  aws s3 sync "$ROOT/out" "s3://${BUCKET}/"
fi
aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*"
echo "Done. Bucket s3://${BUCKET} invalidation on ${DIST}"
