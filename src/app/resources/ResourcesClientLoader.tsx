"use client";

import nextDynamic from "next/dynamic";

const ResourcesApp = nextDynamic(() => import("@/ResourcesApp"), { ssr: false });

export function ResourcesClientLoader() {
  return <ResourcesApp />;
}
