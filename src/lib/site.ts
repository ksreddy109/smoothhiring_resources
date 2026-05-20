export function getSiteUrl() {
  const u = process.env.NEXT_PUBLIC_SITE_URL;
  if (u) return u.replace(/\/$/, "");
  return "https://resources.smoothhiring.com";
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
