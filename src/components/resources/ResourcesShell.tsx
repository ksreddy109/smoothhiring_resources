'use client';

import EastIcon from '@mui/icons-material/East';
import { Box, Link, Stack, Typography } from '@mui/material';
import { ResourceCTAColorBase, ShAppBar } from '@/integrations/smooth-hiring-ui';
import { ResourceWrapperStyle, ResourcesWrapperBox } from '@/components/resources/Resources.styled';
import { ResourceWrapperCTAConstantMessage } from '@/lib/resources-constants';
import { ResourceFooter } from '@/components/resources/ResourceFooter';
import { ResourcesMenu } from '@/components/resources/ResourcesMenu';

export const ResourcesShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResourcesWrapperBox>
      <ResourceWrapperStyle justifyContent="center" direction="row" bgcolor={ResourceCTAColorBase}>
        <Typography variant="body2" align="center" component="p">
          {ResourceWrapperCTAConstantMessage.message}
          <Link href={ResourceWrapperCTAConstantMessage.redirection_url} underline="none" color="inherit" display="inline-flex" alignItems="center">
            <Box component="strong" marginLeft={0.5}>
              {ResourceWrapperCTAConstantMessage.messageCTA}
            </Box>
            <Box component="span" marginLeft={0.5} display="inline-flex" alignItems="center">
              <EastIcon fontSize="small" />
            </Box>
          </Link>
        </Typography>
      </ResourceWrapperStyle>
      <Stack height="100%" paddingTop={1} paddingBottom={1}>
        <ShAppBar position="sticky">
          <ResourcesMenu />
        </ShAppBar>
        <Box flex={1} pt={1}>
          {children}
        </Box>
        <ResourceFooter />
      </Stack>
    </ResourcesWrapperBox>
  );
};
