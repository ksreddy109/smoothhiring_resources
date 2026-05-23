'use client';

import dynamic from 'next/dynamic';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import type { ProgrammaticSeoPage as ProgrammaticSeoPageData } from '@/lib/programmatic-seo-data';
import type { ResourcePageDefinition } from '@/lib/resources/page-registry';

function PageLoading() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        py: 8,
      }}
    >
      <Stack alignItems="center" gap={2}>
        <CircularProgress size={32} color="primary" />
        <Typography variant="body2" color="text.secondary">
          Loading resources…
        </Typography>
      </Stack>
    </Box>
  );
}

// Production static export needs ssr:false (browser-only libs). Dev uses SSR so the page is visible while webpack compiles the client chunk.
const ResourcePageRenderer = dynamic(
  () =>
    import('@/components/resources/ResourcePageRenderer').then(
      (m) => m.ResourcePageRenderer
    ),
  {
    ssr: process.env.NODE_ENV === 'production' ? false : true,
    loading: PageLoading,
  }
);

type Props = {
  page: ResourcePageDefinition;
  programmaticCopy?: { h1: string; subheadline?: string };
  programmaticPage?: ProgrammaticSeoPageData;
};

export function ResourceRouteClient(props: Props) {
  return <ResourcePageRenderer {...props} />;
}
