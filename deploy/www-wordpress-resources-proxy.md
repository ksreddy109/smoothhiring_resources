# smoothhiring.com + WordPress + /resources (path proxy)

**Status:** Apex `smoothhiring.com` → CloudFront `E2O2WRCWTC6KI6`. WordPress default; resources at `/resources*`.

## Redirect loop (fixed)

CloudFront used **HTTP** to Flywheel → Flywheel `301` to `https://smoothhiring.com/` → browser loop.

**Fix:** WordPress origin `https-only` to `origin.smoothhiring.com` (Flywheel IP, not apex) + **Managed-AllViewer** origin request policy so CloudFront forwards the viewer `Host: smoothhiring.com` and uses it for **TLS SNI** (cert matches). Lambda@Edge Host rewrite removed (not needed).

## Architecture

| Component | Value |
|-----------|--------|
| CloudFront distribution | `E2O2WRCWTC6KI6` (`d2bdluyam2rf0m.cloudfront.net`) |
| WordPress origin | `origin.smoothhiring.com` → Flywheel IP (`151.101.2.159`), HTTPS |
| Resources origin | `smoothhiring-resources-production` S3 website |
| Route 53 | `smoothhiring.com` A (alias) → CloudFront |
| `www.smoothhiring.com` | CNAME → `smoothhiring.com` (unchanged) |

### Cache behaviors (order)

1. `/_next*` → resources S3 (static assets)
2. `/resources*` → resources S3 (app + templates + programmatic SEO)
3. Default `*` → WordPress (Flywheel)

### Still on the old distribution (`E185ZBO2WGN7JH`)

- `resources.smoothhiring.com` (subdomain)
- `app.smoothhiring.com`, `ats.smoothhiring.com`, `*.smoothhiring.com` (wildcard)

Optional follow-up: 301 redirect `resources.smoothhiring.com` → `https://smoothhiring.com/resources/` on the old distribution or in Route 53.

## App build URL

```bash
NEXT_PUBLIC_SITE_URL=https://smoothhiring.com
```

Redeploy resources after changing so canonicals and sitemap use `smoothhiring.com`.

## Files

- `deploy/create-www-cloudfront-distribution.json` — distribution template
- `deploy/lambda-edge-wordpress-host/` — legacy; superseded by AllViewer ORP

## Rollback DNS

Restore apex A record to Flywheel:

```bash
aws route53 change-resource-record-sets --hosted-zone-id ZIWGVQNQPNEDV --change-batch '{
  "Changes": [{
    "Action": "UPSERT",
    "ResourceRecordSet": {
      "Name": "smoothhiring.com",
      "Type": "A",
      "TTL": 300,
      "ResourceRecords": [{"Value": "151.101.2.159"}]
    }
  }]
}'
```
