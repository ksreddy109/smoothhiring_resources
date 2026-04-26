import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import FeedIcon from '@mui/icons-material/Feed';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import VerifiedIcon from '@mui/icons-material/Verified';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { CardContent, Chip, Grid, Grow, Stack, Typography } from '@mui/material';
import { IsMdScreen, IsSmScreen } from 'helpers/hooks';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {  ShWordpressButton } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ResourceCardDescription, ResourceCTAStack, ResourceHeroBody, ResourceHeroTitle, ResourceSectionHeading, ResourceSectionHeadingSecondary, ResourceSectionSubtitle } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { getResourcesRedirect } from 'shared/utils';
import { EXPLORE_SMOOTH_HIRING, EXPLORE_SMOOTH_HIRING_DETAILS, HIRE_BEST_CANDIDATES, HIRE_BEST_CANDIDATES_DETAILS } from './ResourcesConstants';
import { ResourceCTA } from './ResourceCTA';

export const ResourcesHome = () => {
  const isSmScreen = IsSmScreen();
  const isMdScreen = IsMdScreen();

  return (
    <>
      <Helmet>
        <meta name='google-site-verification' content='YXtpRnHiDI-gqxrKJSOnrCJDLQqZYcCmplqpHHtzKYQ' />
        {/* Google Tag Manager */}
        <script>
          {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-N46J9TNH');
                    `}
        </script>
        <title>Hiring Resources & Guides | SmoothHiring</title>
        <meta name='description' content='Access top resources, guides, and best practices for efficient recruitment and hiring strategies on SmoothHiring. Boost your hiring success today' />
      </Helmet>
      <ShContainer maxWidth='lg' margin='auto'>
        <Stack paddingTop={4} paddingBottom={2}>
          <ShPaper variant='outlined'>
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
              <Stack justifyContent='center' padding={isSmScreen ? 2 : 5}>
                <ResourceSectionSubtitle variant='body2' textAlign='center' gutterBottom fontWeight={700}>
                  Free HR Resources | Crafted by Industry Experts
                </ResourceSectionSubtitle>
                <ResourceHeroTitle component='h1' gutterBottom>
                  Recruiting Resources Library
                </ResourceHeroTitle>
                <ResourceHeroBody>These tools simplify the creation of compelling job descriptions, freeing you to focus on what counts: finding top talent and forming a robust team. Our resources ensure your job postings stand out, attract qualified candidates and streamline your hiring process for greater efficiency and effectiveness.</ResourceHeroBody>
                <Stack paddingTop={3} justifyContent='center' paddingBottom={1} direction={isSmScreen ? 'column' : 'row'} spacing={1}>
                  <Chip icon={<VerifiedIcon />} label='Save time and Effort' color='primary' variant='outlined' />
                  <Chip icon={<VerifiedIcon />} label='Reduce Hiring Costs' color='primary' variant='outlined' />
                  <Chip icon={<VerifiedIcon />} label='Hire Effortlessly' color='primary' variant='outlined' />
                </Stack>
              </Stack>
            </Grow>
          </ShPaper>
        </Stack>
        <ResourceSectionHeading spacing={1} direction='row' justifyContent='center' sx={{ py: 2 }}>
          <AutoAwesomeIcon color='primary' />
          <Typography variant='h6'>AI Generation Tools</Typography>
        </ResourceSectionHeading>
        <Stack direction={isSmScreen ? 'column' : 'row'} spacing={2} padding={2}>
          <ShPaper variant='outlined'>
            <Stack padding={5} alignItems='center' textAlign='center' spacing={2}>
              <Typography variant='h6' noWrap>
                Interview Kit Generator
              </Typography>
              <ResourceCardDescription variant='body2' sx={{ maxWidth: 300, mx: 'auto' }}>
                Create interview kits with questions & answers, designed to help you conduct organized interviews.
              </ResourceCardDescription>
              <StyledActionButton size='small' variant='contained' endIcon={<NearMeIcon />} component={RouterLink as any} to={getResourcesRedirect('aiInterviewKit')}>
                Generate Interview Kit
              </StyledActionButton>
            </Stack>
          </ShPaper>
          <ShPaper variant='outlined'>
            <Stack padding={5} alignItems='center' textAlign='center' spacing={2}>
              <Typography variant='h6' noWrap>
                Job Description Generator
              </Typography>
              <ResourceCardDescription variant='body2' sx={{ maxWidth: 300, mx: 'auto' }}>
                Create customizable and optimized job descriptions quickly, designed to attract top talent.
              </ResourceCardDescription>
              <ShWordpressButton size='small' variant='contained' color='success' endIcon={<NearMeIcon />} component={RouterLink as any} to={getResourcesRedirect('aiJobDescription')}>
                Generate Job Descriptions
              </ShWordpressButton>
            </Stack>
          </ShPaper>
        </Stack>
        <ResourceSectionHeadingSecondary spacing={1} direction='row' justifyContent='center'>
          <WysiwygIcon color='primary' />
          <Typography variant='h6'>HR Templates</Typography>
        </ResourceSectionHeadingSecondary>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} display='flex' flexDirection='column'>
            <ShPaper variant='outlined'>
              <Stack padding={5} alignItems='center' textAlign='center' spacing={2} height='100%'>
                <Typography variant='h6' {...(isMdScreen ? {} : { noWrap: true })}>
                  Job Description Templates
                </Typography>
                <ResourceCardDescription variant='body2' sx={{ maxWidth: 300, mx: 'auto' }}>
                  Hire faster with our 500+ hiring templates, primed and ready to go.
                </ResourceCardDescription>
                <StyledActionButton size='small' variant='contained' endIcon={<NearMeIcon />} component={RouterLink as any} to={getResourcesRedirect('jobTemplatesHome')}>
                  See Job Description Templates
                </StyledActionButton>
              </Stack>
            </ShPaper>
          </Grid>
          <Grid item xs={12} md={4} display='flex' flexDirection='column'>
            <ShPaper variant='outlined'>
              <Stack padding={5} alignItems='center' textAlign='center' spacing={2} height='100%'>
                <Typography variant='h6' {...(isMdScreen ? {} : { noWrap: true })}>
                  Offer Letter Templates
                </Typography>
                <ResourceCardDescription variant='body2' sx={{ maxWidth: 300, mx: 'auto' }}>
                  Streamline your hiring process with our collection of offer letter templates.
                </ResourceCardDescription>
                <StyledActionButton size='small' variant='contained' endIcon={<NearMeIcon />} component={RouterLink as any} to={getResourcesRedirect('offerLetterTemplates')}>
                  Create Offer Template
                </StyledActionButton>
              </Stack>
            </ShPaper>
          </Grid>
          <Grid item xs={12} md={4} display='flex' flexDirection='column'>
            <ShPaper variant='outlined'>
              <Stack padding={5} alignItems='center' textAlign='center' spacing={2} height='100%'>
                <Typography variant='h6' {...(isMdScreen ? {} : { noWrap: true })}>
                  Policy Templates
                </Typography>
                <ResourceCardDescription variant='body2' sx={{ maxWidth: 300, mx: 'auto' }}>
                  Streamline your policy creation with our library of policy templates.
                </ResourceCardDescription>
                <ShWordpressButton size='small' variant='contained' color='success' endIcon={<NearMeIcon />} component={RouterLink as any} to={getResourcesRedirect('policyTemplatesHome')}>
                  View Policy Templates
                </ShWordpressButton>
              </Stack>
            </ShPaper>
          </Grid>
        </Grid>
        <Grow in={true} timeout={3000} mountOnEnter unmountOnExit>
          <ResourceCTAStack direction={isSmScreen ? 'column' : 'row'} spacing={2} justifyContent='center' alignItems='center' sx={{ mt: 6 }}>
            <ShPaper variant='outlined' sx={{ borderRadius: 20 }}>
              <CardContent>
                <Stack marginBottom={2} paddingLeft={2}>
                  <FeedIcon color='info' fontSize='medium' />
                </Stack>
                <Typography variant='h6' marginBottom={2} paddingLeft={2}>
                  {EXPLORE_SMOOTH_HIRING}
                </Typography>
                <Typography variant='body1' paddingLeft={2} color='text.secondary'>
                  {EXPLORE_SMOOTH_HIRING_DETAILS}
                </Typography>
                <Stack direction={isSmScreen ? 'column' : 'row'} paddingLeft={2} paddingTop={3} spacing={2}>
                  <StyledActionButton variant='text' color='primary' size='medium' href='https://calendly.com/admin-1ue9/30min?month=2024-05'>
                    Schedule a free Demo {'>'}
                  </StyledActionButton>
                </Stack>
              </CardContent>
            </ShPaper>

            <ShPaper variant='outlined' sx={{ borderRadius: 20, marginTop: isSmScreen ? 2.5 : 0 }}>
              <CardContent>
                <Stack marginBottom={2} paddingLeft={2}>
                  <PersonSearchIcon color='info' fontSize='medium' />
                </Stack>
                <Typography variant='h6' paddingLeft={2} marginBottom={2}>
                  {HIRE_BEST_CANDIDATES}
                </Typography>
                <Typography variant='body1' paddingLeft={2} color='text.secondary'>
                  {HIRE_BEST_CANDIDATES_DETAILS}
                </Typography>
                <Stack direction='row' paddingLeft={2} paddingTop={3}>
                  <StyledActionButton href='https://app.smoothhiring.com' color='primary'>
                    Learn more
                    <KeyboardArrowRightOutlinedIcon />
                  </StyledActionButton>
                </Stack>
              </CardContent>
            </ShPaper>
          </ResourceCTAStack>
        </Grow>
      </ShContainer>

      <ShContainer margin='auto' maxWidth='lg'>
        <ResourceCTA title='Need to Advertise your Job?' />
      </ShContainer>
    </>
  );
};

export default ResourcesHome;
