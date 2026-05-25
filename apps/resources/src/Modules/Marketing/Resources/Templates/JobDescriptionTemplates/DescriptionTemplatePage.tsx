'use client';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NearMeIcon from '@mui/icons-material/NearMe';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ShareIcon from '@mui/icons-material/Share';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Chip, Divider, Grid, IconButton, List, ListItemText, Stack, Typography } from '@mui/material';
import { IsSmScreen } from 'helpers/hooks';
import { useCallback, useEffect, useState } from 'react';
import { ResourceLink } from '@/components/resources/ResourceLink';
import { templateSlugFromTitle } from '@/lib/resources/paths';
import { useResourceParams } from '@/lib/resources/route-context';
import { ResourceSocialShare } from '@/components/resources/ResourceSocialShare';
import { ResourceStackPrimaryAction, ShButton, ShContainer, ShGreenBtn, ShMuiLink, ShPaper, PrimaryThemeColor } from '@smoothhiring/smooth-ui';
import { ResourceMarketingActionRow } from '@/components/resources/resource-buttons.styled';
import { getResourcesRedirect } from 'shared/utils';
import { JobDescription, JobDescriptions } from '../TemplateModel';
import { SHSignUpLink } from 'shared/constants';
import { ResourceCTA } from '../../ResourceCTA';

export const DescriptionTemplatePage = () => {
  const isSmScreen = IsSmScreen();
  const { templateName } = useResourceParams<{ templateName: string | undefined }>();
  const [similarTemplates, setSimilarTemplates] = useState<string[]>([]);
  const [jobDescription, setJobDescription] = useState<JobDescription | null>(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [jobDescriptions, setJobDescriptions] = useState<JobDescriptions>({});

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    const loadJobDescriptions = async () => {
      try {
        const modules = await Promise.all([
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/AccountingConstants'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/AdminstrativeConstants'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/EducationConstants'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/FinanceConstants'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/HealthcareConstants'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/HumanResources'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/ITConstants'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/LawConstants'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/MarketingConstants'),
          import('Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePageConstants/SalesConstants'),
        ]);

        const allJobDescriptions = modules.reduce((acc: JobDescriptions, module) => {
          const typedModule = module as Record<string, JobDescription>;
          Object.keys(typedModule).forEach(key => {
            const template = typedModule[key];
            acc[templateSlugFromTitle(template.title)] = template;
          });
          return acc;
        }, {});

        setJobDescriptions(allJobDescriptions);
      } catch (error) {}
    };

    loadJobDescriptions();
  }, []);

  useEffect(() => {
    if (!templateName || Object.keys(jobDescriptions).length === 0) {
      return;
    }
    setJobDescription(jobDescriptions[templateName] ?? null);
  }, [templateName, jobDescriptions]);

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
  };

  const { title = '', jobRole = '', preRead = '', sections = [] } = jobDescription || {};

  useEffect(() => {
    if (title) {
      document.title = `${title} Templates`;
    }
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    const metaDesc = `This customizable ${title.toLocaleLowerCase()} template is optimized for SEO and conversion, and can help you attract top candidates for your company.`;
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDesc);
    }
  }, [title, preRead]);

  const findSimilarTemplates = useCallback(
    (name: string): string[] => {
      try {
        const found: string[] = [];
        const templateWords = name.toLowerCase().split('-');
        Object.keys(jobDescriptions).forEach(key => {
          const template = jobDescriptions[key];
          const templateWordsToMatch = template.title.toLowerCase().split(' ');
          const matches = templateWords.filter(word => templateWordsToMatch.includes(word)).length;
          if (matches >= 3) {
            found.push(template.title);
          }
        });
        return found.length ? found : ['Nothing similar currently, Check back later!'];
      } catch {
        return ['Nothing similar currently, Check back later!'];
      }
    },
    [jobDescriptions]
  );

  useEffect(() => {
    if (templateName && Object.keys(jobDescriptions).length > 0) {
      setSimilarTemplates(findSimilarTemplates(templateName));
    }
  }, [templateName, jobDescriptions, findSimilarTemplates]);

  return (
    <Stack>
      <ShPaper variant='outlined'>
        <Stack justifyContent='center' alignItems='center'>
          <Typography textAlign='center' gutterBottom variant='body2' color={PrimaryThemeColor}>
            HR Templates | Job descriptions
          </Typography>
          <Typography textAlign='center' padding={2} maxWidth={500} variant='h4' gutterBottom>
            {title}
          </Typography>
          <Typography textAlign='center' maxWidth={1000} variant='body1' paragraph>
            {jobRole}
          </Typography>

          <ResourceMarketingActionRow>
            <ShGreenBtn href={SHSignUpLink} size='medium' disableElevation variant='contained' startIcon={<NearMeIcon />}>
              Post this Job
            </ShGreenBtn>
            <ShButton
              href={getResourcesRedirect('aiJobDescription')}
              size='medium'
              color='primary'
              variant='outlined'
              disableElevation
              startIcon={<AutoAwesomeIcon />}
            >
              Create AI Job Description
            </ShButton>
          </ResourceMarketingActionRow>
          <Stack margin={2} spacing={2} direction='row' alignContent='center'>
            <ShareIcon fontSize='small' />
            <Typography variant='subtitle2'> Share this Job Description</Typography>
          </Stack>

          <ResourceSocialShare url={currentUrl} onCopy={copyLink} />
        </Stack>
      </ShPaper>

      <ShContainer maxWidth='md' height='100%' margin='auto'>
        <Stack padding={3}>
          <Typography gutterBottom variant='body1' paragraph>
            {preRead}
          </Typography>
          {sections.map((section, index) => (
            <Box key={index} marginBottom={3}>
              <Typography variant='h6' gutterBottom>
                {section.heading}
              </Typography>
              {Array.isArray(section.paragraphs) ? (
                <List>
                  {section.paragraphs.map((bullet, bulletIndex) => (
                    <ListItemText key={bulletIndex}>
                      <Typography noWrap variant='body1'>
                        - {bullet}
                      </Typography>
                    </ListItemText>
                  ))}
                </List>
              ) : (
                <Typography variant='body1' paragraph>
                  {section.paragraph}
                </Typography>
              )}

              {index === 1 && (
                <Stack padding={1} paddingBottom={5} paddingTop={5}>
                  <ShPaper elevation={4}>
                    <Stack spacing={2}>
                      <Typography gutterBottom variant='h6'>
                        Hiring for {title.replace('Job Description', '').trim()} Role?
                      </Typography>
                      <Typography gutterBottom variant='subtitle1'>
                        LinkedIn, Talent.com, career page - place your job on multiple platforms for FREE with just one click. Plus get a Full HR recruiting suite.
                      </Typography>
                      <Stack paddingBottom={1} direction={isSmScreen ? 'column' : 'row'} spacing={1}>
                        <Chip icon={<VerifiedIcon />} label='Sponsored Jobs' color='primary' variant='outlined' />
                        <Chip icon={<VerifiedIcon />} label='Predictive Assessments' color='primary' variant='outlined' />
                        <Chip icon={<VerifiedIcon />} label='Interview Scheduling' color='primary' variant='outlined' />
                        <Chip icon={<PlaylistAddIcon />} label='And Much More!' color='primary' />
                      </Stack>
                      <ResourceStackPrimaryAction>
                        <ShGreenBtn href={SHSignUpLink} size='medium' disableElevation variant='contained' startIcon={<NearMeIcon />}>
                          Post this Job
                        </ShGreenBtn>
                      </ResourceStackPrimaryAction>
                    </Stack>
                  </ShPaper>
                </Stack>
              )}
            </Box>
          ))}
        </Stack>
        {jobDescription && (
          <Stack padding={3}>
            <Typography variant='h6' paddingBottom={2}>
              {' '}
              Similar Job Description Templates
            </Typography>
            <Divider />
            <Grid container spacing={1} paddingTop={2}>
              {similarTemplates.slice(0, 20).map((template, index) => (
                <Grid item sm={12} md={6} key={index} spacing={3}>
                  <ShMuiLink noWrap component={ResourceLink} href={`/resources/job-description-templates/${templateSlugFromTitle(template)}/`} variant='subtitle2' paddingTop={1} noUnderline>
                    {template}
                  </ShMuiLink>
                </Grid>
              ))}
            </Grid>
            <ResourceCTA />
          </Stack>
        )}
      </ShContainer>
    </Stack>
  );
};

export default DescriptionTemplatePage;
