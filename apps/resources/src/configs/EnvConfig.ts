const fromEnv = (k: string) => {
  if (typeof process === "undefined" || !process.env) return "";
  return process.env[k] || "";
};

/** Ensures trailing slash for axios baseURL concatenation (`${base}api/`). */
function normalizeApiBaseUrl(url: string): string {
  if (!url) return "";
  return url.endsWith("/") ? url : `${url}/`;
}

const apiBaseFromEnv =
  fromEnv("NEXT_PUBLIC_REACT_APP_BASE_URL") || fromEnv("NEXT_PUBLIC_BASE_URL");

/**
 * API host for employer endpoints. Production static builds must bake this in at build time
 * (see deploy workflows); fallback keeps marketing AI tools working when env is unset.
 */
export const REACT_APP_BASE_URL = normalizeApiBaseUrl(
  apiBaseFromEnv || "https://api.smoothhiring.com/"
);
export const REACT_APP_RECAPTCHA_SITE_KEY = fromEnv("NEXT_PUBLIC_REACT_APP_RECAPTCHA_SITE_KEY");
export const REACT_APP_FEED_SERVER_URL = fromEnv("NEXT_PUBLIC_REACT_APP_FEED_SERVER_URL");
export const REACT_APP_STRIPE_PUBLISHABLE_KEY = fromEnv("NEXT_PUBLIC_REACT_APP_STRIPE_PUBLISHABLE_KEY") || "";
