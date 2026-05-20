"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { withTrailingSlash } from "@/lib/site";

/** Client-side fallback; crawlers should get HTTP 301 from CloudFront. */
export function TrailingSlashRedirect() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const canonical = withTrailingSlash(pathname);
    if (canonical !== pathname) {
      window.location.replace(`${canonical}${search}${hash}`);
    }
  }, [pathname, search, hash]);

  return null;
}
