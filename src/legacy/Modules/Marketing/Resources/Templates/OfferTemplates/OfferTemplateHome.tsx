import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Grow, InputAdornment, Stack, Typography } from '@mui/material';
import { IsSmScreen } from 'helpers/hooks';
import { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { ResourceCTA } from '../../ResourceCTA';
import { ResourceCardDescription, ResourceHeroBody, ResourceHeroTitle, ResourceSectionSubtitle } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShMuiLink } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { offerTemplates } from './OfferTemplateConstants';

export const OfferTemplateHome = () => {
  const isSmScreen = IsSmScreen();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredTemplates = offerTemplates.filter(template => template.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Free Offer Letter Templates | SmoothHiring</title>
        <meta name='description' content='Find customizable offer letter templates to streamline your hiring process. Download professionally crafted templates for free at SmoothHiring' />
      </Helmet>
      <ShContainer maxWidth='xl' height='100%' margin='auto'>
        <Stack paddingBottom={3} paddingTop={3}>
          <ShPaper variant='outlined'>
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
              <Stack alignItems='center' justifyContent='center' padding={isSmScreen ? 2 : 5}>
                <ArticleIcon color='primary' />
                <ResourceSectionSubtitle variant='body2' textAlign='center' gutterBottom sx={{ pt: 1 }}>
                  HR Templates | Offer Templates
                </ResourceSectionSubtitle>
                <ResourceHeroTitle component='h1' gutterBottom>
                  Job Offer Templates
                </ResourceHeroTitle>
                <ResourceHeroBody>Job offer templates are standardized documents used by companies to extend employment offers to prospective candidates. These templates serve as a blueprint, outlining the key components of an employment offer, ensuring consistency, compliance, and efficiency throughout the hiring process.</ResourceHeroBody>
              </Stack>
            </Grow>
            <Stack padding={3} margin='auto' maxWidth='sm' paddingBottom={3} direction='row'>
              <ShTextFieldV2
                label='Search Templates'
                variant='outlined'
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </ShPaper>
        </Stack>
        <Grid paddingBottom={3} container spacing={2}>
          {filteredTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ShMuiLink noUnderline component={RouterLink as any} to={`/resources/offer-letter-templates${template.path}`}>
                <ShPaper variant='outlined'>
                  <Stack padding={3} minHeight={isSmScreen ? 100 : 150} justifyContent='center'>
                    <Typography variant='subtitle1' fontWeight={600} color='text.primary' textAlign='left'>
                      {template.title}
                    </Typography>
                    <ResourceCardDescription variant='body2' sx={{ maxWidth: 'none' }} textAlign='left'>
                      {template.description}
                    </ResourceCardDescription>
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

export default OfferTemplateHome;
