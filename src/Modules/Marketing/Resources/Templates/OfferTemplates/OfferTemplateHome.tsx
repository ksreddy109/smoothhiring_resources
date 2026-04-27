import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, InputAdornment, Stack, Typography, styled } from '@mui/material';
import { IsSmScreen } from 'helpers/hooks';
import { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { ResourceCTA } from '../../ResourceCTA';
import { ResourceCardDescription } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShMuiLink } from '@smoothhiring/smooth-ui';
import { TemplateCardHover, TemplateHeroEyebrow, TemplateHeroInner, TemplateHeroBox } from 'components/resources/Resources.styled';
import { offerTemplates } from './OfferTemplateConstants';

const SearchRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  width: '100%',
  maxWidth: 520,
}));

const CardBody = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2.5),
}));

const TemplateDescription = styled(ResourceCardDescription)({
  maxWidth: 'none',
});

export const OfferTemplateHome = () => {
  const isSmScreen = IsSmScreen();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredTemplates = offerTemplates.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Free Offer Letter Templates | SmoothHiring</title>
        <meta name='description' content='Find customizable offer letter templates to streamline your hiring process. Download professionally crafted templates for free at SmoothHiring' />
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
            Offer Letter Templates
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 520, lineHeight: 1.65 }}>
            Extending an offer is one of the most important moments in the hiring process. These templates give you a solid starting point — covering the essentials while leaving room to tailor every detail.
          </Typography>
          <SearchRow>
            <ShTextFieldV2
              label='Search templates'
              variant='outlined'
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon fontSize='small' />
                  </InputAdornment>
                ),
              }}
            />
          </SearchRow>
        </TemplateHeroInner>
      </TemplateHeroBox>

      <ShContainer maxWidth='xl' height='100%' margin='auto'>
        <Grid paddingBottom={4} container spacing={2}>
          {filteredTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ShMuiLink noUnderline component={RouterLink as any} to={`/resources/offer-letter-templates${template.path}`} sx={{ display: 'block', height: '100%' }}>
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

export default OfferTemplateHome;
