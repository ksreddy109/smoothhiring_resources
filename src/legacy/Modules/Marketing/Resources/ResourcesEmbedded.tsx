import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

export const ResourcesEmbedded = () => {
  const location = useLocation();
  const src = useMemo(() => {
    const path = location.pathname === '/resources' ? '/resources/' : location.pathname;
    return `https://resources.smoothhiring.com${path}${location.search}${location.hash}`;
  }, [location.pathname, location.search, location.hash]);

  return (
    <Box width='100%' height='100vh' overflow='hidden'>
      <iframe title='SmoothHiring Resources' src={src} style={{ border: 'none', width: '100%', height: '100%' }} loading='lazy' />
    </Box>
  );
};
