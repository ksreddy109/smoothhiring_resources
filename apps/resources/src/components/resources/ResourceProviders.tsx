"use client";

import { Provider } from "react-redux";
import { store } from "store";

/** Redux provider for resource tools that use notification / breadcrumb slices. */
export function ResourceProviders({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
