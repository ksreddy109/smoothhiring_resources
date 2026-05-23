'use client';

import EastIcon from '@mui/icons-material/East';
import { Box, Link, Stack, Typography, styled } from '@mui/material';
import { ResourceFooter } from '@/components/resources/ResourceFooter';
import { ResourcesMenu } from '@/components/resources/ResourcesMenu';
import { ResourcesWrapperBox } from '@/Modules/Marketing/Resources/Resources.styled';
import { ShAppBar, ShGreen } from '@/integrations/smooth-hiring-ui';
import { ResourceWrapperCTAConstantMessage } from '@/lib/resources-constants';

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
  backgroundColor: ShGreen,
  color: '#fff',
}));

const TopBannerText = styled(Typography)({
  margin: 0,
  color: 'inherit',
}) as typeof Typography;

const TopBannerLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  fontWeight: 500,
  marginLeft: 4,
  '&:hover': { textDecoration: 'underline' },
});

const ShellLayout = styled(Stack)(({ theme }) => ({
  height: '100%',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const ShellContent = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

export function ResourcesShell({ children }: { children: React.ReactNode }) {
  return (
    <ResourcesWrapperBox>
      <TopBanner>
        <TopBannerText variant="body2" align="center" component="p">
          {ResourceWrapperCTAConstantMessage.message}
          <TopBannerLink href={ResourceWrapperCTAConstantMessage.redirection_url}>
            {ResourceWrapperCTAConstantMessage.messageCTA}
            <Box component="span" display="inline-flex" alignItems="center">
              <EastIcon fontSize="small" />
            </Box>
          </TopBannerLink>
        </TopBannerText>
      </TopBanner>
      <ShellLayout>
        <ShAppBar position="sticky" elevation={0}>
          <ResourcesMenu />
        </ShAppBar>
        <ShellContent>{children}</ShellContent>
        <ResourceFooter />
      </ShellLayout>
    </ResourcesWrapperBox>
  );
}
