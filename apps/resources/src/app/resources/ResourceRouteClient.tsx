'use client';

import dynamic from 'next/dynamic';
import type { ProgrammaticSeoPage as ProgrammaticSeoPageData } from '@/lib/programmatic-seo-data';
import type { ResourcePageDefinition } from '@/lib/resources/page-registry';

const ResourcePageRenderer = dynamic(
  () =>
    import('@/components/resources/ResourcePageRenderer').then(
      (m) => m.ResourcePageRenderer
    ),
  { ssr: false, loading: () => null }
);

type Props = {
  page: ResourcePageDefinition;
  programmaticCopy?: { h1: string; subheadline?: string };
  programmaticPage?: ProgrammaticSeoPageData;
};

export function ResourceRouteClient(props: Props) {
  return <ResourcePageRenderer {...props} />;
}
