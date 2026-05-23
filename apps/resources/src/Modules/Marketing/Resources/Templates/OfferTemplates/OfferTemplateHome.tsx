import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, InputAdornment } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import {
  MarketingHero,
  MarketingHeroSearchRow,
  MarketingLinkCard,
  MarketingPage,
} from '@/components/resources/layout';
import { ResourceCTA } from '../../ResourceCTA';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { offerTemplates } from './OfferTemplateConstants';

export const OfferTemplateHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredTemplates = offerTemplates.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates', icon: ArticleIcon }}
        title='Offer Letter Templates'
        description='Extending an offer is one of the most important moments in the hiring process. These templates give you a solid starting point — covering the essentials while leaving room to tailor every detail.'
      >
        <MarketingHeroSearchRow>
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
        </MarketingHeroSearchRow>
      </MarketingHero>

      <Grid container spacing={2} pb={4}>
        {filteredTemplates.map((template) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={template.path}>
            <MarketingLinkCard
              href={`/resources/offer-letter-templates${template.path}/`}
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

export default OfferTemplateHome;
