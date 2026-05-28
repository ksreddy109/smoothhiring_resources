import ArticleIcon from '@mui/icons-material/Article';
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import {
  MarketingHero,
  MarketingLinkCard,
  MarketingPage,
  MarketingSection,
} from '@/components/resources/layout';
import {
  rejectionTemplatesBySituation,
  rejectionTemplatesByStage,
} from 'Modules/Marketing/Resources/Templates/RejectionTemplates/RejectionTemplateConstants';
import { REJECTION_TEMPLATES_INTRO, REJECTION_TEMPLATES_TITLE } from './ResourcesConstants';
import { ResourceCTA } from './ResourceCTA';

function TemplateGrid({ templates }: { templates: typeof rejectionTemplatesByStage }) {
  return (
    <Grid container spacing={2}>
      {templates.map((template) => (
        <Grid item xs={12} sm={6} md={4} key={`${template.path}-${template.title}`}>
          <MarketingLinkCard
            href={`/resources/rejection-letter-templates${template.path}/`}
            title={template.title}
            description={template.description}
            linkLabel='Open template'
          />
        </Grid>
      ))}
    </Grid>
  );
}

export const RejectionTemplateHome = () => {
  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates', icon: ArticleIcon }}
        title={REJECTION_TEMPLATES_TITLE}
        description={REJECTION_TEMPLATES_INTRO}
      />

      <MarketingSection
        id='rejection-by-stage'
        title='Rejection Templates by Hiring Stage'
        description='Choose a candidate rejection email template matched to where the candidate is in your process.'
        py={4}
      >
        <TemplateGrid templates={rejectionTemplatesByStage} />
      </MarketingSection>

      <MarketingSection
        id='rejection-by-situation'
        title='Rejection Templates by Situation'
        description='Templates for common rejection scenarios beyond a standard pass.'
        py={4}
      >
        <TemplateGrid templates={rejectionTemplatesBySituation} />
      </MarketingSection>

      <Box paddingY={4} paddingX={{ xs: 0, sm: 1 }}>
        <Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
          Why Sending a Rejection Email Matters
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          Telling candidates they didn&apos;t get the job isn&apos;t just polite — it&apos;s good business. A clear,
          respectful rejection email closes the loop on a candidate&apos;s application, protects your employer brand,
          and keeps qualified people open to future roles at your company. Candidates who hear nothing assume the worst,
          leave negative reviews on sites like Glassdoor and Indeed, and rarely apply again. Candidates who get a
          thoughtful rejection email often come back — and tell others about a positive experience even after a
          &apos;no&apos;. A few minutes spent sending a proper candidate rejection email pays off for years.
        </Typography>

        <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
          How to Write a Good Rejection Email
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          A good rejection email is short, clear, and human. Start by thanking the candidate for their time and
          interest. Be direct — let them know early in the email that you&apos;ve decided not to move forward with their
          application. If you can offer brief, useful feedback, do so respectfully; if you can&apos;t, a sincere
          acknowledgement of their effort is enough. Avoid vague phrases like &apos;we went with a stronger candidate&apos;
          that leave people hanging, and stay away from anything that could sound like a critique of them as a person.
          Close the email by wishing them well, and where appropriate, invite them to apply for future roles. The whole
          message should fit in a few short paragraphs — long enough to feel personal, short enough to read in under a
          minute.
        </Typography>

        <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
          When to Send a Rejection Email
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          Send rejection emails as soon as you&apos;ve made a decision — ideally within a week of the candidate&apos;s
          last interaction with you. The longer candidates wait without hearing back, the worse the experience becomes,
          even when the final answer is the same. For candidates who applied but weren&apos;t selected for an interview,
          a prompt email within a week or two of applying is fine. For candidates who interviewed, aim to send within a
          few business days of your decision. If your hiring timeline shifts, send a quick update — silence is what
          damages your employer brand, not the &apos;no&apos; itself.
        </Typography>

        <Typography variant='h6' component='h3' gutterBottom fontWeight={600} marginTop={3}>
          Common Mistakes to Avoid
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary='Ghosting candidates — sending nothing at all is the most common and most damaging mistake' />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sending a generic, copy-paste message that doesn't even use the candidate's name" />
          </ListItem>
          <ListItem>
            <ListItemText primary={'Being vague about the decision ("we\'re still evaluating" when you\'ve already decided)'} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Giving detailed personal critique that could feel hurtful or open you up to legal risk' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Waiting weeks or months to respond, especially after an interview' />
          </ListItem>
          <ListItem>
            <ListItemText primary="Promising to 'keep their resume on file' if you don't actually plan to" />
          </ListItem>
        </List>
      </Box>

      <ResourceCTA />
    </MarketingPage>
  );
};

export default RejectionTemplateHome;
