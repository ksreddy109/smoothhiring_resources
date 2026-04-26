import { Box, Stack, Typography } from '@mui/material';
import { GoogleMcIcon } from 'assets/Icons';
import { IsMdScreen } from 'helpers/hooks';
import { SiGlassdoor, SiIndeed, SiMonster } from 'react-icons/si';
import { LinkedinIcon } from 'react-share';
import { ShLogo } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { PrimaryThemeColor, PrimaryWordpressThemeColor, ShGreen } from '@smoothhiring/smooth-ui';
import { SHSignUpLink } from 'shared/constants';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ResourceCTASideContainer = () => {
  const isMdScreen = IsMdScreen();

  return (
    <>
      {!isMdScreen && (
        <ShPaper variant='outlined'>
          <Stack padding={2} overflow='hidden'>
            <Box width='200px' height='50px'>
              <ShLogo />
            </Box>
            <Typography paddingTop={2} variant='h6' fontWeight='bold' gutterBottom>
              Need to Hire?
            </Typography>
            <Typography variant='body1' maxWidth='150px' paddingBottom={2}>
              Try our ATS software and post jobs instantly to 100's of job boards.
            </Typography>
            <Stack direction='row' spacing={2} paddingTop={1} paddingBottom={6} alignItems='center'>
              <LinkedinIcon size={20} />
              <GoogleMcIcon />
              <SiMonster size={20} color={PrimaryWordpressThemeColor} />
              <SiGlassdoor size={20} color={ShGreen} />
              <SiIndeed size={20} color={PrimaryThemeColor} />
            </Stack>
            <StyledActionButton href={SHSignUpLink} variant='contained' color='info' size='large' startIcon={<ArrowForwardIcon />}>
              Post your job
            </StyledActionButton>
          </Stack>
        </ShPaper>
      )}
    </>
  );
};
