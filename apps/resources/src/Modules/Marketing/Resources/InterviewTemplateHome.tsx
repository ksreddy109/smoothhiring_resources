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
import { ResourceCTA } from './ResourceCTA';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { interviewTemplates } from 'Modules/Marketing/Resources/Templates/InterviewTemplates/InterviewTemplateConstants';

export const InterviewTemplateHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredTemplates = interviewTemplates.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates', icon: ArticleIcon }}
        title='Interview Letter Templates'
        description='Clear, professional interview invitations set candidates up for a great experience from the start. Browse templates for phone screens, technical rounds, and panel interviews.'
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
              href={`/resources/interview-letter-templates${template.path}/`}
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

export default InterviewTemplateHome;
