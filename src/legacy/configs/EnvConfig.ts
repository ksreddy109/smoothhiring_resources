const fromEnv = (k: string) => {
  if (typeof process === "undefined" || !process.env) return "";
  return process.env[k] || "";
};

export const REACT_APP_BASE_URL = fromEnv("NEXT_PUBLIC_REACT_APP_BASE_URL") || fromEnv("NEXT_PUBLIC_BASE_URL");
export const REACT_APP_RECAPTCHA_SITE_KEY = fromEnv("NEXT_PUBLIC_REACT_APP_RECAPTCHA_SITE_KEY");
export const REACT_APP_FEED_SERVER_URL = fromEnv("NEXT_PUBLIC_REACT_APP_FEED_SERVER_URL");
export const REACT_APP_STRIPE_PUBLISHABLE_KEY = fromEnv("NEXT_PUBLIC_REACT_APP_STRIPE_PUBLISHABLE_KEY") || "";
