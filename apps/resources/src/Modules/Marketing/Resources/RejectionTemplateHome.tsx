import ArticleIcon from '@mui/icons-material/Article';
import { Grid } from '@mui/material';
import { MarketingHero, MarketingLinkCard, MarketingPage } from '@/components/resources/layout';
import { ResourceCTA } from './ResourceCTA';
import { rejectionTemplates } from 'Modules/Marketing/Resources/Templates/RejectionTemplates/RejectionTemplateConstants';

export const RejectionTemplateHome = () => {
  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates', icon: ArticleIcon }}
        title='Rejection Letter Templates'
        description='How you decline a candidate matters. These templates help your team communicate respectfully — protecting your employer brand at every stage of the process.'
      />

      <Grid container spacing={2} pb={4}>
        {rejectionTemplates.map((template) => (
          <Grid item xs={12} sm={6} md={4} key={template.path}>
            <MarketingLinkCard
              href={`/resources/rejection-letter-templates${template.path}/`}
              title={template.title}
              description={template.description}
              linkLabel='Open template'
            />
          </Grid>
        ))}
      </Grid>
      <ResourceCTA />
    </MarketingPage>
  );
};

export default RejectionTemplateHome;
