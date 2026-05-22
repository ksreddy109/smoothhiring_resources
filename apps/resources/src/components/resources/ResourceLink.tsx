"use client";

import MuiLink, { type LinkProps as MuiLinkProps } from "@mui/material/Link";
import NextLink from "next/link";
import { forwardRef } from "react";
import { resourcePath } from "@/lib/resources/paths";

type ResourceLinkProps = Omit<MuiLinkProps<typeof NextLink>, "href"> & {
  href: string | string[];
};

/** Internal navigation for `/resources/*` using Next.js Link. */
export const ResourceLink = forwardRef<HTMLAnchorElement, ResourceLinkProps>(
  function ResourceLink({ href, ...props }, ref) {
    const url = Array.isArray(href) ? resourcePath(href) : href;
    return <MuiLink component={NextLink} href={url} ref={ref} {...props} />;
  }
);
