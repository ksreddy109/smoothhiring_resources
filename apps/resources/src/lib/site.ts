export function getSiteUrl() {
  const u = process.env.NEXT_PUBLIC_SITE_URL;
  if (u) return u.replace(/\/$/, "");
  return "https://smoothhiring.com";
}

/** Canonical host for programmatic product/industry pages (from SEO CSV url_path). */
export function getMarketingSiteUrl() {
  const u = process.env.NEXT_PUBLIC_MARKETING_SITE_URL;
  if (u) return u.replace(/\/$/, "");
  return "https://www.smoothhiring.com";
}

export function sitePath(path: string) {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Canonical resource paths use a trailing slash (matches next.config trailingSlash). */
export function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  if (/\.\w+$/.test(path.split("?")[0] ?? path)) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

/** Static files under `/resources/…` (matches export paths + CloudFront `/resources/*`). */
export function resourcesAssetPath(assetPath: string): string {
  const p = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `/resources${p}`;
}
