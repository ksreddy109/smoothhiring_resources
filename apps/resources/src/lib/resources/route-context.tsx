"use client";

import { createContext, useContext, useMemo } from "react";
import type { ResourcePageDefinition } from "./page-registry";
import { resourcePath } from "./paths";

export type ResourceRouteContextValue = {
  path: string[];
  page: ResourcePageDefinition;
  params: Record<string, string>;
  pathname: string;
};

const ResourceRouteContext = createContext<ResourceRouteContextValue | null>(null);

export function ResourceRouteProvider({
  path,
  page,
  children,
}: {
  path: string[];
  page: ResourcePageDefinition;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      path,
      page,
      params: page.params,
      pathname: resourcePath(path),
    }),
    [path, page]
  );

  return (
    <ResourceRouteContext.Provider value={value}>{children}</ResourceRouteContext.Provider>
  );
}

export function useResourceRoute(): ResourceRouteContextValue {
  const ctx = useContext(ResourceRouteContext);
  if (!ctx) {
    throw new Error("useResourceRoute must be used within ResourceRouteProvider");
  }
  return ctx;
}

/** Replaces react-router `useParams` for resource pages. */
export function useResourceParams<T extends Record<string, string | undefined>>(): T {
  return useResourceRoute().params as T;
}
