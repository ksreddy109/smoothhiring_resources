'use client';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FeedIcon from '@mui/icons-material/Feed';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import VerifiedIcon from '@mui/icons-material/Verified';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { Box, Button, CardContent, Chip, Grid, Grow, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  ResourceCardDescription,
  ResourceCTAStack,
  ResourceHeroBody,
  ResourceHeroTitle,
  ResourceSectionHeading,
  ResourceSectionHeadingSecondary,
  ResourceSectionSubtitle,
  ShContainer,
  ShPaper,
} from '@/integrations/smooth-hiring-ui';
import Link from 'next/link';
import { EXPLORE_SMOOTH_HIRING, EXPLORE_SMOOTH_HIRING_DETAILS, HIRE_BEST_CANDIDATES, HIRE_BEST_CANDIDATES_DETAILS } from '@/lib/resources-constants';
import { ResourceCTA } from '@/components/resources/ResourceCTA';

export const ResourcesHomeContent = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <ShContainer maxWidth="lg" margin="auto">
        <Stack paddingTop={3} paddingBottom={2}>
          <ShPaper variant="outlined">
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
              <Stack justifyContent="center" padding={isSmScreen ? 2 : 5}>
                <ResourceSectionSubtitle variant="body2" textAlign="center" gutterBottom fontWeight={700}>
                  Free HR Resources | Crafted by Industry Experts
                </ResourceSectionSubtitle>
                <ResourceHeroTitle component="h1" gutterBottom>
                  Recruiting Resources Library
                </ResourceHeroTitle>
                <ResourceHeroBody>
                  These tools simplify the creation of compelling job descriptions, freeing you to focus on what counts: finding top talent and forming a robust team. Our
                  resources ensure your job postings stand out, attract qualified candidates and streamline your hiring process for greater efficiency and effectiveness.
                </ResourceHeroBody>
                <Stack paddingTop={3} justifyContent="center" paddingBottom={1} direction={isSmScreen ? 'column' : 'row'} spacing={1}>
                  <Chip icon={<VerifiedIcon />} label="Save time and Effort" color="primary" variant="outlined" />
                  <Chip icon={<VerifiedIcon />} label="Reduce Hiring Costs" color="primary" variant="outlined" />
                  <Chip icon={<VerifiedIcon />} label="Hire Effortlessly" color="primary" variant="outlined" />
                </Stack>
              </Stack>
            </Grow>
          </ShPaper>
        </Stack>
        <ResourceSectionHeading spacing={1} direction="row" justifyContent="center" paddingY={1}>
          <AutoAwesomeIcon color="primary" />
          <Typography variant="h6">AI Generation Tools</Typography>
        </ResourceSectionHeading>
        <Stack direction={isSmScreen ? 'column' : 'row'} spacing={2} padding={2}>
          <ShPaper variant="outlined">
            <Stack padding={5} alignItems="center" textAlign="center" spacing={2}>
              <Typography variant="h6" noWrap>
                Interview Kit Generator
              </Typography>
              <Box maxWidth={300} marginX="auto">
                <ResourceCardDescription variant="body2" textAlign="center">
                  Create interview kits with questions & answers, designed to help you conduct organized interviews.
                </ResourceCardDescription>
              </Box>
              <Button size="small" variant="contained" endIcon={<NearMeIcon />} component={Link} href="/resources/ai-interview-kit/">
                Generate Interview Kit
              </Button>
            </Stack>
          </ShPaper>
          <ShPaper variant="outlined">
            <Stack padding={5} alignItems="center" textAlign="center" spacing={2}>
              <Typography variant="h6" noWrap>
                Job Description Generator
              </Typography>
              <Box maxWidth={300} marginX="auto">
                <ResourceCardDescription variant="body2" textAlign="center">
                  Create customizable and optimized job descriptions quickly, designed to attract top talent.
                </ResourceCardDescription>
              </Box>
              <Button size="small" variant="contained" color="success" endIcon={<NearMeIcon />} component={Link} href="/resources/ai-job-description/">
                Generate Job Descriptions
              </Button>
            </Stack>
          </ShPaper>
        </Stack>
        <ResourceSectionHeadingSecondary spacing={1} direction="row" justifyContent="center">
          <WysiwygIcon color="primary" />
          <Typography variant="h6">HR Templates</Typography>
        </ResourceSectionHeadingSecondary>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} display="flex" flexDirection="column">
            <ShPaper variant="outlined">
              <Stack padding={5} alignItems="center" textAlign="center" spacing={2} height="100%">
                <Typography variant="h6" {...(isMdScreen ? {} : { noWrap: true })}>
                  Job Description Templates
                </Typography>
                <Box maxWidth={300} marginX="auto">
                  <ResourceCardDescription variant="body2" textAlign="center">
                    Hire faster with our 500+ hiring templates, primed and ready to go.
                  </ResourceCardDescription>
                </Box>
                <Button size="small" variant="contained" endIcon={<NearMeIcon />} component={Link} href="/resources/job-description-templates/">
                  See Job Description Templates
                </Button>
              </Stack>
            </ShPaper>
          </Grid>
          <Grid item xs={12} md={4} display="flex" flexDirection="column">
            <ShPaper variant="outlined">
              <Stack padding={5} alignItems="center" textAlign="center" spacing={2} height="100%">
                <Typography variant="h6" {...(isMdScreen ? {} : { noWrap: true })}>
                  Offer Letter Templates
                </Typography>
                <Box maxWidth={300} marginX="auto">
                  <ResourceCardDescription variant="body2" textAlign="center">
                    Streamline your hiring process with our collection of offer letter templates.
                  </ResourceCardDescription>
                </Box>
                <Button size="small" variant="contained" endIcon={<NearMeIcon />} component={Link} href="/resources/offer-letter-templates/">
                  Create Offer Template
                </Button>
              </Stack>
            </ShPaper>
          </Grid>
          <Grid item xs={12} md={4} display="flex" flexDirection="column">
            <ShPaper variant="outlined">
              <Stack padding={5} alignItems="center" textAlign="center" spacing={2} height="100%">
                <Typography variant="h6" {...(isMdScreen ? {} : { noWrap: true })}>
                  Policy Templates
                </Typography>
                <Box maxWidth={300} marginX="auto">
                  <ResourceCardDescription variant="body2" textAlign="center">
                    Streamline your policy creation with our library of policy templates.
                  </ResourceCardDescription>
                </Box>
                <Button size="small" variant="contained" color="success" endIcon={<NearMeIcon />} component={Link} href="/resources/policy-templates/">
                  View Policy Templates
                </Button>
              </Stack>
            </ShPaper>
          </Grid>
        </Grid>
        <Grow in={true} timeout={3000} mountOnEnter unmountOnExit>
          <ResourceCTAStack direction={isSmScreen ? 'column' : 'row'} spacing={2} justifyContent="center" alignItems="stretch" marginTop={4}>
            <ShPaper variant="outlined">
              <CardContent>
                <Stack marginBottom={2} paddingLeft={2}>
                  <FeedIcon color="info" fontSize="medium" />
                </Stack>
                <Typography variant="h6" marginBottom={2} paddingLeft={2}>
                  {EXPLORE_SMOOTH_HIRING}
                </Typography>
                <Typography variant="body1" paddingLeft={2} color="text.secondary">
                  {EXPLORE_SMOOTH_HIRING_DETAILS}
                </Typography>
                <Stack direction={isSmScreen ? 'column' : 'row'} paddingLeft={2} paddingTop={3} spacing={2}>
                  <Button component="a" variant="text" color="primary" size="medium" href="https://calendly.com/admin-1ue9/30min?month=2024-05">
                    Schedule a free Demo {">"}
                  </Button>
                </Stack>
              </CardContent>
            </ShPaper>
            <Box width="100%" marginTop={isSmScreen ? 2.5 : 0}>
              <ShPaper variant="outlined">
                <CardContent>
                  <Stack marginBottom={2} paddingLeft={2}>
                    <PersonSearchIcon color="info" fontSize="medium" />
                  </Stack>
                <Typography variant="h6" paddingLeft={2} marginBottom={2}>
                  {HIRE_BEST_CANDIDATES}
                </Typography>
                <Typography variant="body1" paddingLeft={2} color="text.secondary">
                  {HIRE_BEST_CANDIDATES_DETAILS}
                </Typography>
                <Stack direction="row" paddingLeft={2} paddingTop={3}>
                  <Button component="a" href="https://app.smoothhiring.com" color="primary">
                    Learn more
                    <KeyboardArrowRightOutlinedIcon />
                  </Button>
                </Stack>
                </CardContent>
              </ShPaper>
            </Box>
          </ResourceCTAStack>
        </Grow>
      </ShContainer>
      <ShContainer margin="auto" maxWidth="lg">
        <ResourceCTA title="Need to Advertise your Job?" />
      </ShContainer>
    </>
  );
};
