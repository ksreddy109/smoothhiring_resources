import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Grid, Stack, Typography, styled } from '@mui/material';
import {
  MarketingHero,
  MarketingLinkCard,
  MarketingPage,
  MarketingSection,
} from '@/components/resources/layout';
import {
  recruitingEmailsApplicationInterview,
  recruitingEmailsDecisionFollowUp,
  recruitingEmailsOnboarding,
  recruitingEmailsOutreach,
} from '@/lib/marketing-data/EmailHubConstants';
import type { RecruitingEmailCard } from '@/lib/marketing-data/EmailHubConstants';
import { ShGreenBtn, ShPaper } from '@smoothhiring/smooth-ui';
import { EmailFeatureChip } from '@/components/resources/layout/EmailTemplateChips';
import {
  EMAIL_TEMPLATES_HOW_TO_WRITE,
  EMAIL_TEMPLATES_INTRO,
  EMAIL_TEMPLATES_TITLE,
} from './ResourcesConstants';
import { ResourceCTA } from './ResourceCTA';

const EmailPromoPaper = styled(ShPaper)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

function TemplateGrid({ templates }: { templates: RecruitingEmailCard[] }) {
  return (
    <Grid container spacing={2}>
      {templates.map((template) => (
        <Grid item xs={12} sm={6} md={4} key={`${template.href}-${template.title}`}>
          <MarketingLinkCard
            href={template.href}
            title={template.title}
            description={template.description}
            linkLabel='View template'
          />
        </Grid>
      ))}
    </Grid>
  );
}

export const EmailTemplatesPage = () => {
  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates' }}
        title={EMAIL_TEMPLATES_TITLE}
        description={EMAIL_TEMPLATES_INTRO}
      />

      <MarketingSection
        id='outreach-sourcing'
        title='Candidate Outreach & Sourcing Emails'
        description='Recruiting email templates for cold outreach, passive candidates, referrals, and talent-pool re-engagement.'
        py={4}
      >
        <TemplateGrid templates={recruitingEmailsOutreach} />
      </MarketingSection>

      <MarketingSection
        id='application-interview'
        title='Application & Interview Emails'
        description='Hiring email templates from application acknowledgement through interview invitations, confirmations, and reminders.'
        py={4}
      >
        <TemplateGrid templates={recruitingEmailsApplicationInterview} />
      </MarketingSection>

      <MarketingSection
        id='decision-follow-up'
        title='Decision & Follow-Up Emails'
        description='Offer emails, rejection emails, candidate follow-ups, and reference requests for the decision stage.'
        py={4}
      >
        <TemplateGrid templates={recruitingEmailsDecisionFollowUp} />
      </MarketingSection>

      <MarketingSection
        id='onboarding'
        title='Onboarding Emails'
        description='Welcome and first-day email templates to onboard new hires before they start.'
        py={4}
      >
        <TemplateGrid templates={recruitingEmailsOnboarding} />
      </MarketingSection>

      <Box paddingY={4} paddingX={{ xs: 0, sm: 1 }}>
        <Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
          How to Write Effective Recruiting Emails
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          {EMAIL_TEMPLATES_HOW_TO_WRITE}
        </Typography>
      </Box>

      <EmailPromoPaper variant='outlined'>
        <Stack padding={3} gap={1.5}>
          <Typography variant='subtitle1'>Manage Email Templates Inside SmoothHiring</Typography>
          <Typography variant='body2' color='text.secondary'>
            SmoothHiring&apos;s built-in email template system lets you create, personalize, and send candidate emails
            automatically as they move through your pipeline. Trigger emails based on stage changes, add custom fields,
            and keep your entire team aligned.
          </Typography>
          <Stack direction='row' flexWrap='wrap' gap={1} paddingTop={0.5}>
            {['Auto-send on stage change', 'Custom merge fields', 'Team shared templates', 'Mobile responsive'].map(
              (feature) => (
                <EmailFeatureChip key={feature} label={feature} />
              )
            )}
          </Stack>
          <Box paddingTop={0.5}>
            <ShGreenBtn
              href='https://app.smoothhiring.com/employer/settings/tools/templates/application-received'
              disableElevation
              variant='contained'
              endIcon={<ArrowForwardIcon fontSize='small' />}
            >
              Manage Email Templates
            </ShGreenBtn>
          </Box>
        </Stack>
      </EmailPromoPaper>

      <ResourceCTA />
    </MarketingPage>
  );
};

export default EmailTemplatesPage;
