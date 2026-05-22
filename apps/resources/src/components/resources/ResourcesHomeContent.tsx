'use client';

import ArticleIcon from '@mui/icons-material/Article';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import { Button, Chip, Stack, Typography } from '@mui/material';
import {
  ResourceHeroBody,
  ResourceHeroTitle,
  ResourceSectionSubtitle,
  ShContainer,
  ShPaper,
} from '@/integrations/smooth-hiring-ui';
import { ResourceLink } from '@/components/resources/ResourceLink';
import { SHSignUpLink } from '@/lib/resources-constants';
import {
  FeatureList,
  FeatureRow,
  HomeHeroActions,
  HomeHeroBox,
  HomeHeroEyebrow,
  HomeHeroInner,
  HomeStatItem,
  HomeStatsGrid,
  PromoCardBody,
  PromoCards,
  SectionHeader,
  TemplateCardAnchor,
  TemplateCardBox,
  TemplateCardContent,
  TemplateCardsGrid,
  TemplateIconBox,
  ToolCardBody,
  ToolCardsRow,
  ToolIconBox,
} from '@/components/resources/ResourcesHomeContent.styled';
import { ResourceCTA } from '@/components/resources/ResourceCTA';

const stats = [
  { value: '500+', label: 'Job Description Templates' },
  { value: '100+', label: 'Policy Templates' },
  { value: '2', label: 'AI-Powered Tools' },
  { value: 'Free', label: 'Always' },
];

const toolCards = [
  {
    title: 'AI Interview Kit Generator',
    description: 'Build structured interview kits with role-specific questions and sample answers — ready in under 30 seconds.',
    href: '/resources/ai-interview-kit/',
    buttonText: 'Generate Interview Kit',
    buttonColor: 'primary' as const,
    Icon: RecordVoiceOverOutlinedIcon,
    features: ['Role-specific question banks', 'Sample answers included', 'Scoring guidance built in'],
  },
  {
    title: 'AI Job Description Generator',
    description: 'Enter a job title and get a complete, polished job description optimized for job boards in seconds.',
    href: '/resources/ai-job-description/',
    buttonText: 'Generate Job Description',
    buttonColor: 'success' as const,
    Icon: WysiwygOutlinedIcon,
    features: ['SEO-optimized output', 'Industry-specific language', 'Post directly to job boards'],
  },
];

const templateCards = [
  {
    title: 'Job Description Templates',
    description: '500+ templates spanning every industry and seniority level.',
    href: '/resources/job-description-templates/',
    Icon: DescriptionOutlinedIcon,
  },
  {
    title: 'Offer Letter Templates',
    description: 'Professional offer letters for full-time, part-time, and contract roles.',
    href: '/resources/offer-letter-templates/',
    Icon: WorkOutlineOutlinedIcon,
  },
  {
    title: 'Policy Templates',
    description: '100+ HR policies covering conduct, leave, compensation, and safety.',
    href: '/resources/policy-templates/',
    Icon: GavelOutlinedIcon,
  },
  {
    title: 'Rejection Letter Templates',
    description: 'Keep candidate relationships positive with respectful decline letters.',
    href: '/resources/rejection-letter-templates/',
    Icon: MarkEmailUnreadOutlinedIcon,
  },
  {
    title: 'Interview Letter Templates',
    description: 'Invitation templates for phone screens, technical rounds, and panels.',
    href: '/resources/interview-letter-templates/',
    Icon: ArticleIcon,
  },
  {
    title: 'Email Templates',
    description: 'Candidate email templates for every stage — outreach to onboarding.',
    href: '/resources/email-templates/',
    Icon: EmailOutlinedIcon,
  },
];

export const ResourcesHomeContent = () => {
  return (
    <ShContainer maxWidth="lg" margin="auto">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HomeHeroBox>
        <HomeHeroInner>
          <HomeHeroEyebrow>
            <AutoAwesomeIcon sx={{ fontSize: '0.75rem' }} />
            Free HR Resources
          </HomeHeroEyebrow>
          <Typography variant="h6" component="h1" gutterBottom>
            Your Recruiting Resource Library
          </Typography>
          <ResourceHeroBody sx={{ maxWidth: 560 }}>
            Job descriptions, offer letters, interview kits, policy templates, and more.
            Everything your team needs to hire confidently — free and ready to use.
          </ResourceHeroBody>
          <HomeHeroActions>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component={ResourceLink}
              href="/resources/ai-job-description/"
            >
              Generate a Job Description
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={ResourceLink}
              href="/resources/job-description-templates/"
            >
              Browse Templates
            </Button>
          </HomeHeroActions>
          <Stack direction="row" gap={1} flexWrap="wrap" justifyContent="center" pt={0.5}>
            <Chip label="No sign-up required" size="small" variant="outlined" />
            <Chip label="Trusted by 5,000+ employers" size="small" variant="outlined" />
            <Chip label="Updated regularly" size="small" variant="outlined" />
          </Stack>
        </HomeHeroInner>
      </HomeHeroBox>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <HomeStatsGrid>
        {stats.map((s) => (
          <HomeStatItem key={s.label}>
            <Typography sx={{ fontSize: '1.125rem', color: 'primary.main', lineHeight: 1 }}>
              {s.value}
            </Typography>
            <Typography variant="caption" color="text.secondary" textAlign="center">
              {s.label}
            </Typography>
          </HomeStatItem>
        ))}
      </HomeStatsGrid>

      {/* ── AI Tools ──────────────────────────────────────────────────────── */}
      <SectionHeader>
        <AutoAwesomeIcon color="primary" fontSize="small" />
        <Typography variant="subtitle1">AI-Powered Tools</Typography>
      </SectionHeader>
      <ToolCardsRow>
        {toolCards.map((card) => (
          <ShPaper key={card.href} variant="outlined" sx={{ flex: 1 }}>
            <ToolCardBody>
              <Stack gap={1.5}>
                <ToolIconBox>
                  <card.Icon fontSize="small" />
                </ToolIconBox>
                <Typography variant="subtitle1">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.65}>
                  {card.description}
                </Typography>
                <FeatureList>
                  {card.features.map((f) => (
                    <FeatureRow key={f}>
                      <span className="dot" />
                      {f}
                    </FeatureRow>
                  ))}
                </FeatureList>
              </Stack>
              <Button
                variant="contained"
                color={card.buttonColor}
                size="small"
                endIcon={<ArrowForwardIcon fontSize="small" />}
                component={ResourceLink}
                href={card.href}
                sx={{ alignSelf: 'flex-start', mt: 1 }}
              >
                {card.buttonText}
              </Button>
            </ToolCardBody>
          </ShPaper>
        ))}
      </ToolCardsRow>

      {/* ── Template Library ──────────────────────────────────────────────── */}
      <SectionHeader>
        <WysiwygOutlinedIcon color="primary" fontSize="small" />
        <Typography variant="subtitle1">HR Template Library</Typography>
      </SectionHeader>
      <TemplateCardsGrid>
        {templateCards.map((card) => (
          <TemplateCardAnchor key={card.href} href={card.href}>
            <TemplateCardBox>
              <TemplateCardContent>
                <Stack gap={0.75}>
                  <TemplateIconBox>
                    <card.Icon sx={{ fontSize: '1rem' }} />
                  </TemplateIconBox>
                  <Typography variant="subtitle2" color="text.primary">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                    {card.description}
                  </Typography>
                </Stack>
                <Typography
                  variant="caption"
                  color="primary"
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}
                >
                  Browse <ArrowForwardIcon sx={{ fontSize: '0.75rem' }} />
                </Typography>
              </TemplateCardContent>
            </TemplateCardBox>
          </TemplateCardAnchor>
        ))}
      </TemplateCardsGrid>

      {/* ── Promo ─────────────────────────────────────────────────────────── */}
      <PromoCards>
        <ShPaper variant="outlined" sx={{ flex: 1 }}>
          <PromoCardBody>
            <ResourceSectionSubtitle variant="body2">Explore SmoothHiring&apos;s ATS</ResourceSectionSubtitle>
            <Typography variant="body2" color="text.secondary">
              Post to 100+ job boards, screen candidates with predictive analytics, and manage your
              entire pipeline in one place.
            </Typography>
            <Button
              component="a"
              href="https://calendly.com/admin-1ue9/30min?month=2024-05"
              variant="text"
              color="primary"
              size="small"
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ alignSelf: 'flex-start' }}
            >
              Schedule a free demo
            </Button>
          </PromoCardBody>
        </ShPaper>
        <ShPaper variant="outlined" sx={{ flex: 1 }}>
          <PromoCardBody>
            <ResourceSectionSubtitle variant="body2">Hire the Right People, Faster</ResourceSectionSubtitle>
            <Typography variant="body2" color="text.secondary">
              SmoothHiring&apos;s patented predictive analytics ranks candidates by job fit — so you
              spend less time screening and more time interviewing.
            </Typography>
            <Button
              component="a"
              href="https://app.smoothhiring.com"
              variant="text"
              color="primary"
              size="small"
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ alignSelf: 'flex-start' }}
            >
              Try it free
            </Button>
          </PromoCardBody>
        </ShPaper>
      </PromoCards>

      <ResourceCTA />
    </ShContainer>
  );
};
