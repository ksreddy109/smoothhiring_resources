import type { Metadata } from "next";
import { allResourceCatchAllPathParams } from "@/lib/resources-data";
import { ResourcesClientLoader } from "../ResourcesClientLoader";

export const dynamic = "force-static";

export function generateStaticParams() {
  return allResourceCatchAllPathParams();
}

export const metadata: Metadata = {
  title: "Hiring Resources and Templates",
};

export default function ResourcesClientHost() {
  return <ResourcesClientLoader />;
}
