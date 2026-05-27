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

const stats = [
  { value: '500+', label: 'Job description templates' },
  { value: '100+', label: 'HR policy templates' },
  { value: '2', label: 'AI hiring tools' },
  { value: 'Free', label: 'No account required' },
];

const toolCards = [
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
    features: ['Optimized for job boards', 'Industry-aware language', 'Edit and post in one flow'],
  },
];

const templateCards = [
  {
    title: 'Job description templates',
    description: 'Templates for every industry and seniority level.',
    href: '/resources/job-description-templates/',
    Icon: DescriptionOutlinedIcon,
  },
  {
    title: 'Offer letter templates',
    description: 'Formal and informal offers for full-time, part-time, and contract hires.',
    href: '/resources/offer-letter-templates/',
    Icon: WorkOutlineOutlinedIcon,
  },
  {
    title: 'Policy templates',
    description: 'HR policies for conduct, leave, compensation, and workplace safety.',
    href: '/resources/policy-templates/',
    Icon: GavelOutlinedIcon,
  },
  {
    title: 'Rejection letter templates',
    description: 'Respectful decline letters that protect your employer brand.',
    href: '/resources/rejection-letter-templates/',
    Icon: MarkEmailUnreadOutlinedIcon,
  },
  {
    title: 'Interview letter templates',
    description: 'Invitations for phone screens, panels, and final rounds.',
    href: '/resources/interview-letter-templates/',
    Icon: ArticleIcon,
  },
  {
    title: 'Email templates',
    description: 'Candidate emails from first outreach through onboarding.',
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

export const ResourcesHomeContent = () => {
  return (
    <MarketingPage>
      <MarketingHero
        eyebrow={{ label: 'Free hiring resources', variant: 'strongFit' }}
        title="Free Hiring Resources, Templates & AI Tools"
        description="Everything you need to hire faster, all in one place — and completely free. Browse SmoothHiring's library of job description templates, interview kits, offer letters, HR policy templates, and AI-powered generators built for recruiters and HR teams. No sign-up, no paywall. Just practical hiring resources you can use today."
      >
        <ResourceHeroCtaButtons
          primary={{
            href: '/resources/ai-job-description/',
            label: 'Generate a job description',
            endIcon: <ArrowForwardIcon />,
          }}
          secondary={{
            href: '/resources/job-description-templates/',
            label: 'Browse templates',
          }}
        />
        <MarketingHeroFootnote variant="body2">
          No sign-up required · Trusted by 5,000+ employers · Updated regularly
        </MarketingHeroFootnote>
      </MarketingHero>

      <MarketingStatStrip stats={stats} aria-label="Resource library highlights" />

      <MarketingSection
        id="ai-tools"
        overline="AI-powered tools"
        title="Draft hiring content in minutes"
        description="Use our generators when you need a strong starting point — then edit and publish on your terms."
      >
        <Stack direction={{ xs: 'column', md: 'row' }} gap={2.5}>
          {toolCards.map(({ Icon, ...card }) => (
            <MarketingToolCard key={card.href} icon={Icon} {...card} />
          ))}
        </Stack>
      </MarketingSection>

      <MarketingSection
        id="templates"
        overline="Template library"
        title="HR documents for every stage of hiring"
        description="Pick a category, open a template, and adapt it to your company voice — no account required."
      >
        <Grid container spacing={2}>
          {templateCards.map((card) => (
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
                linkLabel="View templates"
              />
            </Grid>
          ))}
        </Grid>
      </MarketingSection>

      <MarketingSection
        id="why"
        overline="Why teams use this library"
        title="Practical resources, not generic AI filler"
      >
        <Grid container spacing={2}>
          {valueProps.map(({ Icon, title, body }) => (
            <Grid item xs={12} md={4} key={title}>
              <ShPaper variant="outlined" height="100%" noPadding>
                <MarketingCardPadding>
                  <Icon color="primary" fontSize="small" aria-hidden />
                  <Typography variant="subtitle1" component="h3">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.65}>
                    {body}
                  </Typography>
                </MarketingCardPadding>
              </ShPaper>
            </Grid>
          ))}
        </Grid>
      </MarketingSection>

      <MarketingSection overline="SmoothHiring ATS" title="From templates to hired" py={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ShPaper variant="outlined" height="100%" noPadding>
              <MarketingCardPadding>
                <Typography variant="overline" color="primary">
                  Post &amp; manage
                </Typography>
                <MarketingCardTitle variant="h3" component="h3">
                  Post jobs and manage candidates in one place
                </MarketingCardTitle>
                <Typography variant="body2" color="text.secondary" lineHeight={1.65}>
                  Distribute to 100+ boards, screen with predictive analytics, and keep your pipeline
                  moving without switching tools.
                </Typography>
                <MarketingCardActionRow>
                  <ShButton
                    component="a"
                    href="https://calendly.com/admin-1ue9/30min?month=2024-05"
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Schedule a demo
                  </ShButton>
                </MarketingCardActionRow>
              </MarketingCardPadding>
            </ShPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ShPaper variant="outlined" height="100%" noPadding>
              <MarketingCardPadding>
                <Typography variant="overline" color="success.main">
                  Predictive hiring
                </Typography>
                <MarketingCardTitle variant="h3" component="h3">
                  Rank candidates by job fit, not guesswork
                </MarketingCardTitle>
                <Typography variant="body2" color="text.secondary" lineHeight={1.65}>
                  SmoothHiring scores applicants so your team interviews the right people first —
                  especially when volume is high.
                </Typography>
                <MarketingCardActionRow>
                  <ShButton
                    component="a"
                    href="https://app.smoothhiring.com"
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Try SmoothHiring free
                  </ShButton>
                </MarketingCardActionRow>
              </MarketingCardPadding>
            </ShPaper>
          </Grid>
        </Grid>
      </MarketingSection>

      <MarketingCtaSection>
        <ResourceCTA />
      </MarketingCtaSection>
    </MarketingPage>
  );
};
