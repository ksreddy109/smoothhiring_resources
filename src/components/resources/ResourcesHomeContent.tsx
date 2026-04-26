'use client';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FeedIcon from '@mui/icons-material/Feed';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import VerifiedIcon from '@mui/icons-material/Verified';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { Button, Chip, Grid, Grow, Stack, Typography } from '@mui/material';
import {
  ResourceCardDescription,
  ResourceHeroBody,
  ResourceHeroTitle,
  ResourceSectionSubtitle,
  ShContainer,
  ShPaper,
} from '@/integrations/smooth-hiring-ui';
import {
  ResourcesHomeCardBody,
  ResourcesHomeCardDescWrap,
  ResourcesHomeHeroChipRow,
  ResourcesHomeHeroContent,
  ResourcesHomeHeroSection,
  ResourcesHomePromoCard,
  ResourcesHomePromoCardActions,
  ResourcesHomePromoCardIcon,
  ResourcesHomePromoCards,
  ResourcesHomeSectionHeader,
  ResourcesHomeToolCards,
} from '@/components/resources/ResourcesHomeContent.styled';
import Link from 'next/link';
import { EXPLORE_SMOOTH_HIRING, EXPLORE_SMOOTH_HIRING_DETAILS, HIRE_BEST_CANDIDATES, HIRE_BEST_CANDIDATES_DETAILS } from '@/lib/resources-constants';
import { ResourceCTA } from '@/components/resources/ResourceCTA';

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
        <ResourcesHomeHeroSection>
          <ShPaper variant="outlined">
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
              <ResourcesHomeHeroContent>
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
                <ResourcesHomeHeroChipRow>
                  <Chip icon={<VerifiedIcon />} label="Save time and Effort" color="primary" variant="outlined" />
                  <Chip icon={<VerifiedIcon />} label="Reduce Hiring Costs" color="primary" variant="outlined" />
                  <Chip icon={<VerifiedIcon />} label="Hire Effortlessly" color="primary" variant="outlined" />
                </ResourcesHomeHeroChipRow>
              </ResourcesHomeHeroContent>
            </Grow>
          </ShPaper>
        </ResourcesHomeHeroSection>
        <ResourcesHomeSectionHeader>
          <AutoAwesomeIcon color="primary" />
          <Typography variant="h6">AI Generation Tools</Typography>
        </ResourcesHomeSectionHeader>
        <ResourcesHomeToolCards>
          {toolCards.map((card) => (
            <ShPaper key={card.href} variant="outlined">
              <ResourcesHomeCardBody>
                <Typography variant="h6">{card.title}</Typography>
                <ResourcesHomeCardDescWrap>
                  <ResourceCardDescription variant="body2" textAlign="center">
                    {card.description}
                  </ResourceCardDescription>
                </ResourcesHomeCardDescWrap>
                <Button size="small" variant="contained" color={card.buttonColor} endIcon={<NearMeIcon />} component={Link} href={card.href}>
                  {card.buttonText}
                </Button>
              </ResourcesHomeCardBody>
            </ShPaper>
          ))}
        </ResourcesHomeToolCards>
        <ResourcesHomeSectionHeader>
          <WysiwygIcon color="primary" />
          <Typography variant="h6">HR Templates</Typography>
        </ResourcesHomeSectionHeader>
        <Grid container spacing={2}>
          {templateCards.map((card) => (
            <Grid key={card.href} item xs={12} md={4}>
              <ShPaper variant="outlined">
                <ResourcesHomeCardBody>
                  <Typography variant="h6">{card.title}</Typography>
                  <ResourcesHomeCardDescWrap>
                    <ResourceCardDescription variant="body2" textAlign="center">
                      {card.description}
                    </ResourceCardDescription>
                  </ResourcesHomeCardDescWrap>
                  <Button size="small" variant="contained" color={card.buttonColor} endIcon={<NearMeIcon />} component={Link} href={card.href}>
                    {card.buttonText}
                  </Button>
                </ResourcesHomeCardBody>
              </ShPaper>
            </Grid>
          ))}
        </Grid>
        <Grow in={true} timeout={3000} mountOnEnter unmountOnExit>
          <ResourcesHomePromoCards>
            <ShPaper variant="outlined">
              <ResourcesHomePromoCard>
                <ResourcesHomePromoCardIcon>
                  <FeedIcon color="info" fontSize="medium" />
                </ResourcesHomePromoCardIcon>
                <Typography variant="h6">{EXPLORE_SMOOTH_HIRING}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {EXPLORE_SMOOTH_HIRING_DETAILS}
                </Typography>
                <ResourcesHomePromoCardActions>
                  <Button component="a" variant="text" color="primary" size="medium" href="https://calendly.com/admin-1ue9/30min?month=2024-05">
                    Schedule a free Demo {">"}
                  </Button>
                </ResourcesHomePromoCardActions>
              </ResourcesHomePromoCard>
            </ShPaper>
            <ShPaper variant="outlined">
              <ResourcesHomePromoCard>
                <ResourcesHomePromoCardIcon>
                  <PersonSearchIcon color="info" fontSize="medium" />
                </ResourcesHomePromoCardIcon>
                <Typography variant="h6">{HIRE_BEST_CANDIDATES}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {HIRE_BEST_CANDIDATES_DETAILS}
                </Typography>
                <ResourcesHomePromoCardActions>
                  <Button component="a" href="https://app.smoothhiring.com" color="primary">
                    Learn more
                    <KeyboardArrowRightOutlinedIcon />
                  </Button>
                </ResourcesHomePromoCardActions>
              </ResourcesHomePromoCard>
            </ShPaper>
          </ResourcesHomePromoCards>
        </Grow>
      </ShContainer>
      <ShContainer margin="auto" maxWidth="lg">
        <ResourceCTA title="Need to Advertise your Job?" />
      </ShContainer>
    </>
  );
};
