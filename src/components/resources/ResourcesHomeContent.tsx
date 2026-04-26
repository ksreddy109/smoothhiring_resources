'use client';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FeedIcon from '@mui/icons-material/Feed';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import VerifiedIcon from '@mui/icons-material/Verified';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { Box, Button, Chip, Grid, Grow, Stack, Typography, styled } from '@mui/material';
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

const HeroSection = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(2),
}));

const HeroContent = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const HeroChipRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  justifyContent: 'center',
  gap: theme.spacing(1),
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const SectionHeader = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const ToolCards = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const CardBody = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(5),
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  height: '100%',
}));

const CardDescWrap = styled(Box)(() => ({
  maxWidth: 300,
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const PromoCards = styled(ResourceCTAStack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'stretch',
  marginTop: theme.spacing(4),
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const PromoCard = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  height: '100%',
}));

const PromoCardIcon = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const PromoCardActions = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const toolCards = [
  {
    title: 'Interview Kit Generator',
    description: 'Create interview kits with questions & answers, designed to help you conduct organized interviews.',
    href: '/resources/ai-interview-kit/',
    buttonText: 'Generate Interview Kit',
    buttonColor: 'primary' as const,
  },
  {
    title: 'Job Description Generator',
    description: 'Create customizable and optimized job descriptions quickly, designed to attract top talent.',
    href: '/resources/ai-job-description/',
    buttonText: 'Generate Job Descriptions',
    buttonColor: 'success' as const,
  },
];

const templateCards = [
  {
    title: 'Job Description Templates',
    description: 'Hire faster with our 500+ hiring templates, primed and ready to go.',
    href: '/resources/job-description-templates/',
    buttonText: 'See Job Description Templates',
    buttonColor: 'primary' as const,
  },
  {
    title: 'Offer Letter Templates',
    description: 'Streamline your hiring process with our collection of offer letter templates.',
    href: '/resources/offer-letter-templates/',
    buttonText: 'Create Offer Template',
    buttonColor: 'primary' as const,
  },
  {
    title: 'Policy Templates',
    description: 'Streamline your policy creation with our library of policy templates.',
    href: '/resources/policy-templates/',
    buttonText: 'View Policy Templates',
    buttonColor: 'success' as const,
  },
];

export const ResourcesHomeContent = () => {
  return (
    <>
      <ShContainer maxWidth="lg" margin="auto">
        <HeroSection>
          <ShPaper variant="outlined">
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
              <HeroContent>
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
                <HeroChipRow>
                  <Chip icon={<VerifiedIcon />} label="Save time and Effort" color="primary" variant="outlined" />
                  <Chip icon={<VerifiedIcon />} label="Reduce Hiring Costs" color="primary" variant="outlined" />
                  <Chip icon={<VerifiedIcon />} label="Hire Effortlessly" color="primary" variant="outlined" />
                </HeroChipRow>
              </HeroContent>
            </Grow>
          </ShPaper>
        </HeroSection>
        <SectionHeader>
          <AutoAwesomeIcon color="primary" />
          <Typography variant="h6">AI Generation Tools</Typography>
        </SectionHeader>
        <ToolCards>
          {toolCards.map((card) => (
            <ShPaper key={card.href} variant="outlined">
              <CardBody>
                <Typography variant="h6">{card.title}</Typography>
                <CardDescWrap>
                  <ResourceCardDescription variant="body2" textAlign="center">
                    {card.description}
                  </ResourceCardDescription>
                </CardDescWrap>
                <Button size="small" variant="contained" color={card.buttonColor} endIcon={<NearMeIcon />} component={Link} href={card.href}>
                  {card.buttonText}
                </Button>
              </CardBody>
            </ShPaper>
          ))}
        </ToolCards>
        <SectionHeader>
          <WysiwygIcon color="primary" />
          <Typography variant="h6">HR Templates</Typography>
        </SectionHeader>
        <Grid container spacing={2}>
          {templateCards.map((card) => (
            <Grid key={card.href} item xs={12} md={4}>
              <ShPaper variant="outlined">
                <CardBody>
                  <Typography variant="h6">{card.title}</Typography>
                  <CardDescWrap>
                    <ResourceCardDescription variant="body2" textAlign="center">
                      {card.description}
                    </ResourceCardDescription>
                  </CardDescWrap>
                  <Button size="small" variant="contained" color={card.buttonColor} endIcon={<NearMeIcon />} component={Link} href={card.href}>
                    {card.buttonText}
                  </Button>
                </CardBody>
              </ShPaper>
            </Grid>
          ))}
        </Grid>
        <Grow in={true} timeout={3000} mountOnEnter unmountOnExit>
          <PromoCards>
            <ShPaper variant="outlined">
              <PromoCard>
                <PromoCardIcon>
                  <FeedIcon color="info" fontSize="medium" />
                </PromoCardIcon>
                <Typography variant="h6">{EXPLORE_SMOOTH_HIRING}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {EXPLORE_SMOOTH_HIRING_DETAILS}
                </Typography>
                <PromoCardActions>
                  <Button component="a" variant="text" color="primary" size="medium" href="https://calendly.com/admin-1ue9/30min?month=2024-05">
                    Schedule a free Demo {">"}
                  </Button>
                </PromoCardActions>
              </PromoCard>
            </ShPaper>
            <ShPaper variant="outlined">
              <PromoCard>
                <PromoCardIcon>
                  <PersonSearchIcon color="info" fontSize="medium" />
                </PromoCardIcon>
                <Typography variant="h6">{HIRE_BEST_CANDIDATES}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {HIRE_BEST_CANDIDATES_DETAILS}
                </Typography>
                <PromoCardActions>
                  <Button component="a" href="https://app.smoothhiring.com" color="primary">
                    Learn more
                    <KeyboardArrowRightOutlinedIcon />
                  </Button>
                </PromoCardActions>
              </PromoCard>
            </ShPaper>
          </PromoCards>
        </Grow>
      </ShContainer>
      <ShContainer margin="auto" maxWidth="lg">
        <ResourceCTA title="Need to Advertise your Job?" />
      </ShContainer>
    </>
  );
};
