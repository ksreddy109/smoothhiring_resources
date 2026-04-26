import EastIcon from '@mui/icons-material/East';
import { Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { ShAppBar } from '@smoothhiring/smooth-ui';
import { ResourceCTAColorBase } from '@smoothhiring/smooth-ui';
import { ResourceFooter } from './ResourceFooter';
import { ResourceWrapperStyle, ResourcesWrapperBox } from './Resources.styled';
import { ResourceWrapperCTAConstantMessage } from './ResourcesConstants';
import { ResourcesMenu } from './ResourcesMenu';

export const ResourcesWrapper = () => {
  return (
    <ResourcesWrapperBox>
      <ResourceWrapperStyle justifyContent='center' direction='row' bgcolor={ResourceCTAColorBase}>
        <Typography fontSize={15} textAlign='center'>
          {ResourceWrapperCTAConstantMessage.message}
          <Link component={RouterLink as any} to={ResourceWrapperCTAConstantMessage.redirection_url} underline='none' color='inherit' justifyContent='center' alignContent='center' display='inline-flex'>
            <strong> {ResourceWrapperCTAConstantMessage.messageCTA}</strong> &nbsp;
            <EastIcon />
          </Link>
        </Typography>
      </ResourceWrapperStyle>

      <Stack height='100%' paddingTop={1} paddingBottom={1}>
        <ShAppBar position='sticky'>
          <ResourcesMenu />
        </ShAppBar>
        <Box flex={1} pt={1}>
          <Outlet />
        </Box>
        <ResourceFooter />
      </Stack>
    </ResourcesWrapperBox>
  );
};

export default ResourcesWrapper;
