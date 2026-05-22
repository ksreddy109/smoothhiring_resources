'use client';

import dynamic from 'next/dynamic';

const ResourceSocialShareInner = dynamic(
  () =>
    import('./ResourceSocialShareInner').then((m) => m.ResourceSocialShareInner),
  { ssr: false, loading: () => null }
);

type Props = {
  url: string;
  onCopy: () => void;
};

export function ResourceSocialShare(props: Props) {
  return <ResourceSocialShareInner {...props} />;
}
