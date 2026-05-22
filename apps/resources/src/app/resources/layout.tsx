import { ResourceProviders } from "@/components/resources/ResourceProviders";

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <ResourceProviders>{children}</ResourceProviders>;
}
