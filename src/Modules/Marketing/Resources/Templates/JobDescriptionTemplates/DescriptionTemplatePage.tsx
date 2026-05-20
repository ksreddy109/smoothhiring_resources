import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import NearMeIcon from '@mui/icons-material/NearMe';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ShareIcon from '@mui/icons-material/Share';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Chip, Divider, Grid, IconButton, List, ListItemText, Stack, Typography } from '@mui/material';
import { IsSmScreen } from 'helpers/hooks';
import { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { ResourceActionRow, ShButton, ShContainer, ShMuiLink, ShPaper, PrimaryThemeColor } from '@smoothhiring/smooth-ui';
import { getResourcesRedirect } from 'shared/utils';
import { JobDescription, JobDescriptions } from '../TemplateModel';
import { SHSignUpLink } from 'shared/constants';
import { ResourceCTA } from '../../ResourceCTA';

export const DescriptionTemplatePage = () => {
  const isSmScreen = IsSmScreen();
  const { templateName } = useParams<{ templateName: string | undefined }>();
  const [similarTemplates, setSimilarTemplates] = useState<string[]>([]);
  const [jobDescription, setJobDescription] = useState<JobDescription | null>(null);
  const currentUrl = window.location.href;
  const navigate = useNavigate();
  const [jobDescriptions, setJobDescriptions] = useState<JobDescriptions>({});

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
            const formattedKey = key.toLowerCase();
            acc[formattedKey] = template;
          });
          return acc;
        }, {});

        setJobDescriptions(allJobDescriptions);
      } catch (error) {}
    };

    loadJobDescriptions();
  }, []);

  useEffect(() => {
    if (templateName) {
      const formattedTemplateName = templateName.replace(/-/g, '').replace(/[()]/g, '').toLowerCase();
      const matchedJobDescription = jobDescriptions[formattedTemplateName];
      setJobDescription(matchedJobDescription ?? null);
      // if (!matchedJobDescription) {
      //     // Navigate to the error page if the job description is empty
      //     navigate('/error');
      //     return;
      // }
    }
  }, [navigate, templateName, jobDescriptions]);

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

          <ResourceActionRow sx={{ m: 1 }}>
            <ShButton href={SHSignUpLink} size='large' color='primary' variant='contained' startIcon={<NearMeIcon />} extraLarge>
              Post this Job
            </ShButton>
            <ShButton href={getResourcesRedirect('aiJobDescription')} size='large' color='info' variant='outlined' startIcon={<AutoAwesomeIcon />} extraLarge>
              Create AI Job Description
            </ShButton>
          </ResourceActionRow>
          <Stack margin={2} spacing={2} direction='row' alignContent='center'>
            <ShareIcon fontSize='small' />
            <Typography variant='subtitle2'> Share this Job Description</Typography>
          </Stack>

          <Stack spacing={2} direction='row'>
            <FacebookShareButton url={currentUrl}>
              <FacebookIcon size={30} round />
            </FacebookShareButton>
            <LinkedinShareButton url={currentUrl}>
              <LinkedinIcon size={30} round />
            </LinkedinShareButton>
            <TwitterShareButton url={currentUrl}>
              <TwitterIcon size={30} round />
            </TwitterShareButton>
            <EmailShareButton url={currentUrl}>
              <EmailIcon size={30} round />
            </EmailShareButton>
            <IconButton onClick={copyLink}>
              <ContentCopyIcon />
            </IconButton>
          </Stack>
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
                      <ShButton href={SHSignUpLink} size='large' color='primary' variant='contained' startIcon={<NearMeIcon />} extraLarge sx={{ alignSelf: 'flex-start' }}>
                        Post this Job
                      </ShButton>
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
                  <ShMuiLink noWrap component={RouterLink as any} to={`/resources/job-description-templates/${template.split(' ').join('-').toLocaleLowerCase()}/`} variant='subtitle2' paddingTop={1} noUnderline>
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
