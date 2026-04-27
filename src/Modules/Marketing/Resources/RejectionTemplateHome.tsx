import ArticleIcon from '@mui/icons-material/Article';
import { Grid, Stack, Typography, styled } from '@mui/material';
import { IsSmScreen } from 'helpers/hooks';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { ResourceCTA } from './ResourceCTA';
import { ResourceCardDescription } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ShMuiLink } from '@smoothhiring/smooth-ui';
import { TemplateCardHover, TemplateHeroEyebrow, TemplateHeroInner, TemplateHeroBox } from 'components/resources/Resources.styled';
import { rejectionTemplates } from 'Modules/Marketing/Resources/Templates/RejectionTemplates/RejectionTemplateConstants';

const CardBody = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2.5),
}));

const TemplateDescription = styled(ResourceCardDescription)({
  maxWidth: 'none',
});

export const RejectionTemplateHome = () => {
  const isSmScreen = IsSmScreen();

  return (
    <>
      <Helmet>
        <title>Free Rejection Letter Templates | SmoothHiring</title>
        <meta
          name='description'
          content='Professional rejection letter templates to communicate with candidates respectfully. Customize and download for free at SmoothHiring.'
        />
      </Helmet>

      <TemplateHeroBox>
        <TemplateHeroInner>
          <TemplateHeroEyebrow>
            <ArticleIcon sx={{ fontSize: '0.75rem' }} />
            HR Templates
          </TemplateHeroEyebrow>
          <Typography
            component='h1'
            sx={{ fontWeight: 700, fontSize: { xs: '1.625rem', sm: '2.125rem' }, letterSpacing: '-0.02em', color: 'text.primary' }}
          >
            Rejection Letter Templates
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 520, lineHeight: 1.65 }}>
            How you decline a candidate matters. These templates help your team communicate respectfully — protecting your employer brand at every stage of the process.
          </Typography>
        </TemplateHeroInner>
      </TemplateHeroBox>

      <ShContainer maxWidth='xl' height='100%' margin='auto'>
        <Grid paddingBottom={4} container spacing={2}>
          {rejectionTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ShMuiLink noUnderline component={RouterLink as any} to={`/resources/rejection-letter-templates${template.path}`} sx={{ display: 'block', height: '100%' }}>
                <TemplateCardHover>
                  <CardBody minHeight={isSmScreen ? 90 : 130} justifyContent='center'>
                    <Typography variant='subtitle2' fontWeight={600} color='text.primary'>
                      {template.title}
                    </Typography>
                    <TemplateDescription variant='body2'>
                      {template.description}
                    </TemplateDescription>
                  </CardBody>
                </TemplateCardHover>
              </ShMuiLink>
            </Grid>
          ))}
        </Grid>
        <ResourceCTA />
      </ShContainer>
    </>
  );
};

export default RejectionTemplateHome;
