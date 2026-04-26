'use client';

import EastIcon from '@mui/icons-material/East';
import { Box, Link, Stack, Typography, styled } from '@mui/material';
import { ResourceCTAColorBase, ShAppBar } from '@/integrations/smooth-hiring-ui';
import { ResourcesWrapperBox } from '@/components/resources/Resources.styled';
import { ResourceWrapperCTAConstantMessage } from '@/lib/resources-constants';
import { ResourceFooter } from '@/components/resources/ResourceFooter';
import { ResourcesMenu } from '@/components/resources/ResourcesMenu';

const TopBanner = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  padding: theme.spacing(1.75),
  backgroundColor: ResourceCTAColorBase,
}));

const TopBannerLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

const ShellLayout = styled(Stack)(({ theme }) => ({
  height: '100%',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const ShellContent = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing(1),
}));

export const ResourcesShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResourcesWrapperBox>
      <TopBanner>
        <Typography variant="body2" align="center" component="p">
          {ResourceWrapperCTAConstantMessage.message}
          <TopBannerLink href={ResourceWrapperCTAConstantMessage.redirection_url}>
            <Box component="strong">
              {ResourceWrapperCTAConstantMessage.messageCTA}
            </Box>
            <Box component="span" display="inline-flex" alignItems="center">
              <EastIcon fontSize="small" />
            </Box>
          </TopBannerLink>
        </Typography>
      </TopBanner>
      <ShellLayout>
        <ShAppBar position="sticky">
          <ResourcesMenu />
        </ShAppBar>
        <ShellContent>
          {children}
        </ShellContent>
        <ResourceFooter />
      </ShellLayout>
    </ResourcesWrapperBox>
  );
};
