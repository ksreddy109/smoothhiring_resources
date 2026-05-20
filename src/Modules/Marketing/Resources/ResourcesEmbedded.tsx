import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, styled } from '@mui/material';

const EmbeddedFrame = styled('iframe')({
  border: 'none',
  width: '100%',
  height: '100%',
});

export const ResourcesEmbedded = () => {
  const location = useLocation();
  const src = useMemo(() => {
    const path = location.pathname === '/resources' ? '/resources/' : location.pathname;
    return `https://smoothhiring.com${path}${location.search}${location.hash}`;
  }, [location.pathname, location.search, location.hash]);

  return (
    <Box width='100%' height='100vh' overflow='hidden'>
      <EmbeddedFrame title='SmoothHiring Resources' src={src} loading='lazy' />
    </Box>
  );
};
