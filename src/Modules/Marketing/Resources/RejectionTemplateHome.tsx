import ArticleIcon from '@mui/icons-material/Article';
import { Grid, Grow, Stack, Typography, styled } from '@mui/material';
import { IsSmScreen } from 'helpers/hooks';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { ResourceCTA } from './ResourceCTA';
import { ResourceCardDescription, ResourceHeroBody, ResourceHeroTitle, ResourceSectionSubtitle } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ShMuiLink } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { rejectionTemplates } from 'Modules/Marketing/Resources/Templates/RejectionTemplates/RejectionTemplateConstants';

const Subtitle = styled(ResourceSectionSubtitle)(({ theme }) => ({
  paddingTop: theme.spacing(1),
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
      <ShContainer maxWidth='xl' height='100%' margin='auto'>
        <Stack paddingBottom={3} paddingTop={3}>
          <ShPaper variant='outlined'>
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
              <Stack alignItems='center' justifyContent='center' padding={isSmScreen ? 2 : 5}>
                <ArticleIcon color='primary' />
                <Subtitle variant='body2' textAlign='center' gutterBottom>
                  HR Templates | Rejection Letter Templates
                </Subtitle>
                <ResourceHeroTitle component='h1' gutterBottom>
                  Rejection Letter Templates
                </ResourceHeroTitle>
                <ResourceHeroBody>Rejection letter templates help your team send clear, professional declines while protecting your candidate experience.</ResourceHeroBody>
              </Stack>
            </Grow>
          </ShPaper>
        </Stack>
        <Grid paddingBottom={3} container spacing={2}>
          {rejectionTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ShMuiLink noUnderline component={RouterLink as any} to={`/resources/rejection-letter-templates${template.path}`}>
                <ShPaper variant='outlined'>
                  <Stack padding={3} minHeight={isSmScreen ? 100 : 150} justifyContent='center'>
                    <Typography variant='subtitle1' fontWeight={600} color='text.primary' textAlign='left'>
                      {template.title}
                    </Typography>
                    <TemplateDescription variant='body2' textAlign='left'>
                      {template.description}
                    </TemplateDescription>
                  </Stack>
                </ShPaper>
              </ShMuiLink>
            </Grid>
          ))}
        </Grid>
        <Stack paddingBottom={3} margin='auto' maxWidth='lg'>
          <ResourceCTA />
        </Stack>
      </ShContainer>
    </>
  );
};

export default RejectionTemplateHome;
