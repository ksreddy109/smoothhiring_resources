import ArticleIcon from '@mui/icons-material/Article';
import { Box, Grid, Typography } from '@mui/material';
import {
  MarketingHero,
  MarketingLinkCard,
  MarketingPage,
  MarketingSection,
} from '@/components/resources/layout';
import { OFFER_TEMPLATES_INTRO, OFFER_TEMPLATES_TITLE } from '../../ResourcesConstants';
import { ResourceCTA } from '../../ResourceCTA';
import {
  jobOfferEmailTemplates,
  offerTemplatesByEmploymentType,
  offerTemplatesByRole,
} from './OfferTemplateConstants';
import type { OfferTemplateCard } from './OfferTemplateConstants';

function TemplateGrid({ templates }: { templates: OfferTemplateCard[] }) {
  return (
    <Grid container spacing={2}>
      {templates.map((template) => (
        <Grid item xs={12} sm={6} md={4} key={`${template.path}-${template.title}`}>
          <MarketingLinkCard
            href={`/resources/offer-letter-templates${template.path}/`}
            title={template.title}
            description={template.description}
            linkLabel='Open template'
          />
        </Grid>
      ))}
    </Grid>
  );
}

export const OfferTemplateHome = () => {
  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates', icon: ArticleIcon }}
        title={OFFER_TEMPLATES_TITLE}
        description={OFFER_TEMPLATES_INTRO}
      />

      <MarketingSection
        id='offer-by-employment-type'
        title='Offer Letter Templates by Employment Type'
        description='Find an offer letter format matched to full-time, part-time, internship, contract, or remote hires.'
        py={4}
      >
        <TemplateGrid templates={offerTemplatesByEmploymentType} />
      </MarketingSection>

      <MarketingSection
        id='offer-by-role'
        title='Offer Letter Templates by Role'
        description='Role-specific offer letter templates and examples you can customize before extending an offer.'
        py={4}
      >
        <TemplateGrid templates={offerTemplatesByRole} />
      </MarketingSection>

      <MarketingSection
        id='job-offer-email'
        title='Job Offer Email Templates'
        description='Short-form job offer email templates for quick confirmation before your full offer letter.'
        py={4}
      >
        <TemplateGrid templates={jobOfferEmailTemplates} />
      </MarketingSection>

      <Box paddingY={4} paddingX={{ xs: 0, sm: 1 }}>
        <Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
          What to Include in an Offer Letter
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          A complete offer letter gives the candidate everything they need to make a confident decision — and
          protects you by putting the terms in writing. Every offer letter should include the job title and a brief
          description of the role, the start date, and whether the position is full-time, part-time, or contract. Spell
          out the compensation clearly: base salary or hourly rate, pay frequency, and any bonus or commission
          structure. Include the benefits summary (health insurance, PTO, retirement, and any perks), the work location
          or remote arrangement, and who the person will report to. Finally, state any conditions of employment — such
          as background checks or references — and an offer expiration date so the candidate knows when to respond.
        </Typography>

        <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
          How to Write an Offer Letter
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          Writing an offer letter is straightforward once you have a template. Start with a warm, congratulatory
          opening that confirms you&apos;re extending an offer. State the role, start date, and employment type clearly
          in the first paragraph. Lay out the compensation and benefits in a clean, scannable format — candidates read
          this part most closely. Include the key terms and any conditions, then close with a clear next step: how to
          accept, who to contact with questions, and the date the offer expires. Keep the tone professional but
          genuinely welcoming — this is the candidate&apos;s first official impression of working with you. Once
          it&apos;s ready, send it promptly; the faster you extend a clear, professional offer, the less likely a
          strong candidate is to accept elsewhere.
        </Typography>
      </Box>

      <ResourceCTA />
    </MarketingPage>
  );
};

export default OfferTemplateHome;
