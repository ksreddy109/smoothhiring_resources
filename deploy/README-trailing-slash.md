# Trailing slash redirects (resources.smoothhiring.com)

The Next app builds with `trailingSlash: true`. Canonical URLs end with `/`.

Duplicate indexing happens when crawlers hit the same path with and without a trailing slash. Fix at the edge with a **301** on CloudFront.

## One-time CloudFront setup

1. Create or update the function from `cloudfront-trailing-slash-redirect.js` (runtime `cloudfront-js-2.0`).
2. Publish the function.
3. Associate it with distribution `E185ZBO2WGN7JH` on **Viewer request** (before cache).

Example:

```bash
aws cloudfront create-function \
  --name resources-trailing-slash-redirect \
  --function-config 'Comment="301 to trailing slash",Runtime=cloudfront-js-2.0' \
  --function-code fileb://deploy/cloudfront-trailing-slash-redirect.js

# After testing in console, publish and attach to the distribution behavior.
```

Until this is live, the app still runs an inline redirect in `layout.tsx` and `TrailingSlashRedirect` for browsers; prefer the CloudFront 301 for SEO.
