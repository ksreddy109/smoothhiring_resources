'use client';

import EastIcon from '@mui/icons-material/East';
import { Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ResourceCTAColorBase, ShAppBar } from '@/integrations/smooth-hiring-ui';
import { ResourceWrapperStyle, ResourcesWrapperBox } from '@/components/resources/Resources.styled';
import { ResourceWrapperCTAConstantMessage } from '@/lib/resources-constants';
import { ResourceFooter } from '@/components/resources/ResourceFooter';
import { ResourcesMenu } from '@/components/resources/ResourcesMenu';

export const ResourcesShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResourcesWrapperBox>
      <ResourceWrapperStyle justifyContent="center" direction="row" bgcolor={ResourceCTAColorBase}>
        <Typography fontSize={15} textAlign="center">
          {ResourceWrapperCTAConstantMessage.message}
          <Link href={ResourceWrapperCTAConstantMessage.redirection_url} underline="none" color="inherit" justifyContent="center" alignContent="center" display="inline-flex">
            <strong> {ResourceWrapperCTAConstantMessage.messageCTA}</strong>
            &nbsp;
            <EastIcon />
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
