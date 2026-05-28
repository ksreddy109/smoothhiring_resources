import { Box, Grid, Typography } from '@mui/material';
import {
  MarketingHero,
  MarketingLinkCard,
  MarketingPage,
  MarketingSection,
} from '@/components/resources/layout';
import {
  interviewRelatedEmailTemplates,
  interviewTemplatesByStage,
  interviewTemplatesByType,
} from 'Modules/Marketing/Resources/Templates/InterviewTemplates/InterviewTemplateConstants';
import type { InterviewTemplateCard } from 'Modules/Marketing/Resources/Templates/InterviewTemplates/InterviewTemplateConstants';
import {
  INTERVIEW_TEMPLATES_HOW_TO_WRITE,
  INTERVIEW_TEMPLATES_INTRO,
  INTERVIEW_TEMPLATES_TITLE,
  INTERVIEW_TEMPLATES_WHAT_TO_INCLUDE,
} from './ResourcesConstants';
import { ResourceCTA } from './ResourceCTA';

function TemplateGrid({ templates }: { templates: InterviewTemplateCard[] }) {
  return (
    <Grid container spacing={2}>
      {templates.map((template) => (
        <Grid item xs={12} sm={6} md={4} key={`${template.path}-${template.title}`}>
          <MarketingLinkCard
            href={`/resources/interview-letter-templates${template.path}/`}
            title={template.title}
            description={template.description}
            linkLabel='Open template'
          />
        </Grid>
      ))}
    </Grid>
  );
}

export const InterviewTemplateHome = () => {
  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates' }}
        title={INTERVIEW_TEMPLATES_TITLE}
        description={INTERVIEW_TEMPLATES_INTRO}
      />

      <MarketingSection
        id='interview-by-type'
        title='Interview Invitation Emails by Type'
        description='Free interview invitation email templates for phone, video, in-person, panel, and async interviews.'
        py={4}
      >
        <TemplateGrid templates={interviewTemplatesByType} />
      </MarketingSection>

      <MarketingSection
        id='interview-by-stage'
        title='Interview Invitation Emails by Stage'
        description='Invitation to interview email templates for first, second, and final rounds.'
        py={4}
      >
        <TemplateGrid templates={interviewTemplatesByStage} />
      </MarketingSection>

      <MarketingSection
        id='interview-related-emails'
        title='Related Interview Emails'
        description='Self-scheduling invites, reschedule messages, and interview confirmation templates.'
        py={4}
      >
        <TemplateGrid templates={interviewRelatedEmailTemplates} />
      </MarketingSection>

      <Box paddingY={4} paddingX={{ xs: 0, sm: 1 }}>
        <Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
          What to Include in an Interview Invitation Email
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          {INTERVIEW_TEMPLATES_WHAT_TO_INCLUDE}
        </Typography>

        <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
          How to Write an Interview Invitation Email
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          {INTERVIEW_TEMPLATES_HOW_TO_WRITE}
        </Typography>
      </Box>

      <ResourceCTA />
    </MarketingPage>
  );
};

export default InterviewTemplateHome;
