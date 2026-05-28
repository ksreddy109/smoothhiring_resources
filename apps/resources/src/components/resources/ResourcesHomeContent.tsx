'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import { Grid, Stack, Typography } from '@mui/material';
import {
  MarketingHero,
  MarketingLinkCard,
  MarketingPage,
  MarketingSection,
  MarketingStatStrip,
  MarketingToolCard,
} from '@/components/resources/layout';
import {
  MarketingCardActionRow,
  MarketingCardPadding,
  MarketingCardTitle,
  MarketingCtaSection,
  MarketingHeroFootnote,
  MarketingIconWrapMd,
} from '@/components/resources/layout/layout.styled';
import { ShButton, ShPaper } from '@/integrations/smooth-hiring-ui';
import { ResourceHeroCtaButtons } from '@/components/resources/layout';
import { ResourceCTA } from '@/components/resources/ResourceCTA';
import { SHPostJobUrl, SHSignUpUrl } from '@/lib/resources-constants';

const stats = [
  { value: '500+', label: 'Job description templates' },
  { value: '100+', label: 'HR policy templates' },
  { value: '16+', label: 'Recruiting email templates' },
  { value: 'Free', label: 'No account required' },
];

const aiToolCards = [
  {
    title: 'AI Interview Kit Generator',
    description:
      'Structured questions, sample answers, and scoring notes for any role — built in under a minute.',
    href: '/resources/ai-interview-kit/',
    buttonText: 'Build interview kit',
    variant: 'primary' as const,
    Icon: RecordVoiceOverOutlinedIcon,
    features: ['Role-specific question banks', 'Sample answers included', 'Ready to share with your team'],
  },
  {
    title: 'AI Job Description Generator',
    description:
      'Turn a job title into a complete, board-ready description with the right tone for your industry.',
    href: '/resources/ai-job-description/',
    buttonText: 'Write job description',
    variant: 'success' as const,
    Icon: WysiwygOutlinedIcon,
    features: ['Optimized for job boards', 'Industry-aware language', 'Edit and copy in one flow'],
  },
];

const jobDescriptionLinks = [
  {
    title: 'Job description templates',
    description: 'Free templates for 100+ roles — sales, engineering, operations, HR, and more.',
    href: '/resources/job-description-templates/',
    Icon: DescriptionOutlinedIcon,
  },
];

const interviewKitLinks = [
  {
    title: 'AI Interview Kit Generator',
    description: 'Generate role-specific interview questions and scorecards in seconds.',
    href: '/resources/ai-interview-kit/',
    Icon: RecordVoiceOverOutlinedIcon,
  },
  {
    title: 'Interview invitation email templates',
    description: 'Phone, video, panel, and in-person interview invitation emails.',
    href: '/resources/interview-letter-templates/',
    Icon: ArticleIcon,
  },
];

const offerLinks = [
  {
    title: 'Offer letter templates',
    description: 'Full-time, part-time, internship, and role-specific offer letter examples.',
    href: '/resources/offer-letter-templates/',
    Icon: WorkOutlineOutlinedIcon,
  },
];

const policyLinks = [
  {
    title: 'HR policy templates',
    description: 'PTO, remote work, code of conduct, and workplace policies.',
    href: '/resources/policy-templates/',
    Icon: GavelOutlinedIcon,
  },
];

const moreTemplateLinks = [
  {
    title: 'Rejection letter templates',
    description: 'Professional candidate rejection emails for every hiring stage.',
    href: '/resources/rejection-letter-templates/',
    Icon: MarkEmailUnreadOutlinedIcon,
  },
  {
    title: 'Recruiting & hiring email templates',
    description: 'Outreach, interview, offer, rejection, and onboarding emails.',
    href: '/resources/email-templates/',
    Icon: EmailOutlinedIcon,
  },
];

const valueProps = [
  {
    Icon: VerifiedOutlinedIcon,
    title: 'Built for real hiring teams',
    body: 'Templates and tools reflect how recruiters and HR actually work — not generic filler copy.',
  },
  {
    Icon: SpeedOutlinedIcon,
    title: 'Start fast, stay consistent',
    body: 'Download, customize, and reuse the same standards across every role and hiring manager.',
  },
  {
    Icon: AutoAwesomeIcon,
    title: 'AI when you need a draft',
    body: 'Generators give you a strong first version so you spend time refining, not starting from scratch.',
  },
];

function LinkGrid({ cards }: { cards: typeof jobDescriptionLinks }) {
  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.href}>
          <MarketingLinkCard
            href={card.href}
            title={card.title}
            description={card.description}
            icon={
              <MarketingIconWrapMd>
                <card.Icon aria-hidden />
              </MarketingIconWrapMd>
            }
            linkLabel='View templates'
          />
        </Grid>
      ))}
    </Grid>
  );
}

export const ResourcesHomeContent = () => {
  return (
    <MarketingPage>
      <MarketingHero
        eyebrow={{ label: 'Free hiring resources' }}
        title='Free Hiring Resources, Templates & AI Tools'
        description="Everything you need to hire faster, all in one place — and completely free. Browse SmoothHiring's library of job description templates, interview kits, offer letters, HR policy templates, and AI-powered generators built for recruiters and HR teams. No sign-up, no paywall. Just practical hiring resources you can use today."
      >
        <ResourceHeroCtaButtons
          primary={{ href: SHSignUpUrl, label: 'Try SmoothHiring Free', endIcon: <ArrowForwardIcon /> }}
          secondary={{ href: SHPostJobUrl, label: 'Post a Job Free' }}
          primaryVariant='green'
        />
        <MarketingHeroFootnote variant='body2'>
          Free trial · No credit card required · Trusted by 5,000+ employers
        </MarketingHeroFootnote>
      </MarketingHero>

      <MarketingStatStrip stats={stats} aria-label='Resource library highlights' />

      <MarketingSection
        id='job-description-templates'
        title='Job Description Templates'
        description='Free job description templates and examples for every role — copy, customize, and post in minutes.'
      >
        <LinkGrid cards={jobDescriptionLinks} />
      </MarketingSection>

      <MarketingSection
        id='interview-kits'
        title='Interview Kits & Questions'
        description='Structured interview kits and invitation emails so every interviewer runs a fair, consistent process.'
      >
        <LinkGrid cards={interviewKitLinks} />
      </MarketingSection>

      <MarketingSection
        id='offer-letter-templates'
        title='Offer Letter Templates'
        description='Editable offer letter templates by employment type, role, and format — ready to send.'
      >
        <LinkGrid cards={offerLinks} />
      </MarketingSection>

      <MarketingSection
        id='policy-templates'
        title='HR Policy Templates'
        description='Standardize leave, conduct, remote work, and safety policies with free HR policy templates.'
      >
        <LinkGrid cards={policyLinks} />
      </MarketingSection>

      <MarketingSection
        id='ai-tools'
        title='Free AI Hiring Tools'
        description='Generate job descriptions and interview kits with AI — no sign-up required.'
      >
        <Stack direction={{ xs: 'column', md: 'row' }} gap={2.5}>
          {aiToolCards.map(({ Icon, ...card }) => (
            <MarketingToolCard key={card.href} icon={Icon} {...card} />
          ))}
        </Stack>
      </MarketingSection>

      <MarketingSection
        id='more-templates'
        overline='Also in the library'
        title='More hiring templates'
        description='Rejection letters, recruiting emails, and every stage of candidate communication.'
      >
        <LinkGrid cards={moreTemplateLinks} />
      </MarketingSection>

      <MarketingSection id='why' overline='Why teams use this library' title='Practical resources, not generic AI filler'>
        <Grid container spacing={2}>
          {valueProps.map(({ Icon, title, body }) => (
            <Grid item xs={12} md={4} key={title}>
              <ShPaper variant='outlined' height='100%' noPadding>
                <MarketingCardPadding>
                  <Icon color='primary' fontSize='small' aria-hidden />
                  <Typography variant='subtitle1' component='h3'>
                    {title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' lineHeight={1.65}>
                    {body}
                  </Typography>
                </MarketingCardPadding>
              </ShPaper>
            </Grid>
          ))}
        </Grid>
      </MarketingSection>

      <MarketingSection overline='SmoothHiring ATS' title='From templates to hired' py={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ShPaper variant='outlined' height='100%' noPadding>
              <MarketingCardPadding>
                <Typography variant='overline' color='primary'>
                  Post &amp; manage
                </Typography>
                <MarketingCardTitle variant='h3' component='h3'>
                  Post jobs and manage candidates in one place
                </MarketingCardTitle>
                <Typography variant='body2' color='text.secondary' lineHeight={1.65}>
                  Distribute to 100+ boards, screen with predictive hiring, and keep your pipeline moving without
                  switching tools.
                </Typography>
                <MarketingCardActionRow>
                  <ShButton
                    component='a'
                    href={SHSignUpUrl}
                    variant='contained'
                    color='primary'
                    endIcon={<ArrowForwardIcon />}
                  >
                    Try SmoothHiring free
                  </ShButton>
                </MarketingCardActionRow>
              </MarketingCardPadding>
            </ShPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ShPaper variant='outlined' height='100%' noPadding>
              <MarketingCardPadding>
                <Typography variant='overline' color='success.main'>
                  Predictive hiring
                </Typography>
                <MarketingCardTitle variant='h3' component='h3'>
                  Rank candidates by job fit, not guesswork
                </MarketingCardTitle>
                <Typography variant='body2' color='text.secondary' lineHeight={1.65}>
                  SmoothHiring scores applicants so your team interviews the right people first — especially when
                  volume is high.
                </Typography>
                <MarketingCardActionRow>
                  <ShButton component='a' href={SHPostJobUrl} variant='outlined' color='primary' endIcon={<ArrowForwardIcon />}>
                    Post a job free
                  </ShButton>
                </MarketingCardActionRow>
              </MarketingCardPadding>
            </ShPaper>
          </Grid>
        </Grid>
      </MarketingSection>

      <MarketingCtaSection>
        <ResourceCTA buttonText='Post a job free' />
      </MarketingCtaSection>
    </MarketingPage>
  );
};
