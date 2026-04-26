import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import NearMeIcon from '@mui/icons-material/NearMe';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ShareIcon from '@mui/icons-material/Share';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Chip, Divider, Grid, IconButton, List, ListItemText, Stack, Typography } from '@mui/material';
import { IsSmScreen } from 'helpers/hooks';
import { MouseEvent, Suspense, useCallback, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ShMuiLink } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { PrimaryThemeColor } from '@smoothhiring/smooth-ui';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { PolicyTemplate, PolicyTemplates } from '../TemplateModel';
import { SHSignUpLink } from 'shared/constants';
import { ResourceCTA } from '../../ResourceCTA';

export const PolicyTemplatePage = () => {
  const isSmScreen = IsSmScreen();
  const { templateName } = useParams<{ templateName: string | undefined }>();
  const [similarTemplates, setSimilarTemplates] = useState<string[]>([]);
  const [policyTemplate, setPolicyTemplate] = useState<PolicyTemplate | null>(null);
  const currentUrl = window.location.href;
  const navigate = useNavigate();
  const [policyDescriptions, setPolicyDescriptions] = useState<PolicyTemplates>({});

  // Lazy load policy descriptions when needed
  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const module = await import('Modules/Marketing/Resources/Templates/PolicyTemplates/PolicyTemplatePageConstants/CompanyPoliciesConstants');
        const typedModule = module as Record<string, PolicyTemplate>;
        const policyDescriptions: PolicyTemplates = {};

        Object.keys(typedModule).forEach(exportKey => {
          const template = typedModule[exportKey];
          const key = template.title
            .toLowerCase()
            .replace(/[\s()]/g, '')
            .replace(/-/g, '');
          policyDescriptions[key] = template;
        });
        setPolicyDescriptions(policyDescriptions);
      } catch (error) {}
    };

    loadTemplates();
  }, []);

  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

  useEffect(() => {
    if (templateName && Object.keys(policyDescriptions).length > 0) {
      const formattedTemplateName = templateName.replace(/[\s()-]/g, '').toLowerCase();
      const matchedPolicyTemplate = policyDescriptions[formattedTemplateName];
      setPolicyTemplate(matchedPolicyTemplate ?? null);

      if (!matchedPolicyTemplate) {
        navigate('/error');
      }
    }
  }, [templateName, policyDescriptions, navigate]);

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
  };

  const { title = '', policyBlurb = '', preRead = '', sections = [] } = policyTemplate || {};

  // Changing title & meta description for google searches
  document.title = title + ' Templates';

  useEffect(() => {
    // Changing title & meta description for google searches
    if (policyTemplate) {
      document.title = `${policyTemplate.title} Templates`;

      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      const metaDesc = `This ${policyTemplate.title.toLowerCase()} will give you a good starting point for your company!`;
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', metaDesc);
      }
    }
  }, [policyTemplate]);

  const findSimilarTemplates = useCallback(
    (templateName: string): string[] => {
      const foundSimilar: string[] = [];
      const templateWords = templateName.toLowerCase().split('-');

      Object.keys(policyDescriptions).forEach(key => {
        const template = policyDescriptions[key];
        const templateWordsToMatch = template.title.toLowerCase().split(' ');
        const matches = templateWords.filter(word => templateWordsToMatch.includes(word)).length;

        if (matches >= 2) {
          foundSimilar.push(template.title);
        }
      });

      return foundSimilar.length ? foundSimilar : ['Nothing similar currently, Check back later!'];
    },
    [policyDescriptions]
  );

  useEffect(() => {
    if (templateName) {
      const createSimilarTemplates = async () => {
        const templates = await findSimilarTemplates(templateName);
        setSimilarTemplates(templates);
      };
      createSimilarTemplates();
    }
  }, [templateName, similarTemplates, findSimilarTemplates]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack>
        <ShPaper variant='outlined'>
          <Stack padding={5} justifyContent='center' alignItems='center'>
            <Typography textAlign='center' gutterBottom variant='body2' color={PrimaryThemeColor}>
              HR Templates | Company Policy Templates
            </Typography>
            <Typography textAlign='center' padding={2} maxWidth={500} variant='body1' gutterBottom>
              {title}
            </Typography>
            <Typography textAlign='center' maxWidth={1000} variant='body2' paragraph>
              {policyBlurb}
            </Typography>

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
            <Typography gutterBottom variant='subtitle1' paragraph>
              {preRead}
            </Typography>
            <Typography variant='h6'>Table of Contents</Typography>
            <List>
              {sections.map(
                (section, index) =>
                  !section.heading.toLowerCase().includes('table of contents') && (
                    <ShMuiLink
                      key={index}
                      component={RouterLink as any}
                      to={`#section${index}`}
                      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        const element = document.getElementById(`section${index}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Typography>
                        {' '}
                        {index}. {section.heading}{' '}
                      </Typography>
                    </ShMuiLink>
                  )
              )}
            </List>
            {sections.map((section, index) => (
              <Box key={index} marginBottom={3} id={`section${index}`}>
                {!section.heading.toLowerCase().includes('table of contents') && (
                  <Typography variant='h6' gutterBottom>
                    {section.heading}
                  </Typography>
                )}
                {Array.isArray(section.paragraphs) ? (
                  <List>
                    {section.paragraphs.map(
                      (bullet, bulletIndex) =>
                        !section.heading.toLowerCase().includes('table of contents') && (
                          <ListItemText key={bulletIndex}>
                            <Typography variant='body2' paddingTop={bullet.length > 80 ? 1 : 0}>
                              {bullet.length < 60 && `${bulletIndex + 1}.`} {bullet}
                            </Typography>
                          </ListItemText>
                        )
                    )}
                  </List>
                ) : (
                  <Typography variant='body2' paragraph>
                    {section.paragraph}
                  </Typography>
                )}
                {index === 1 && (
                  <Stack paddingBottom={5} paddingTop={5}>
                    <ShPaper elevation={4}>
                      <Stack spacing={2} padding={1}>
                        <Typography gutterBottom variant='h6'>
                          Struggling to find qualified candidates for your Job?
                        </Typography>
                        <Typography gutterBottom variant='subtitle1'>
                          Discover how SmoothHiring's patented predictive analytics assessment ensures you find only the most qualified candidates!
                        </Typography>
                        <Stack paddingBottom={1} direction={isSmScreen ? 'column' : 'row'} spacing={1}>
                          <Chip icon={<VerifiedIcon />} label='Sponsored Jobs' color='primary' variant='outlined' />
                          <Chip icon={<VerifiedIcon />} label='Predictive Assessments' color='primary' variant='outlined' />
                          <Chip icon={<VerifiedIcon />} label='Interview Scheduling' color='primary' variant='outlined' />
                          <Chip icon={<PlaylistAddIcon />} label='And Much More!' color='primary' />
                        </Stack>
                        <StyledActionButton href={SHSignUpLink} size='large' color='primary' variant='contained' startIcon={<NearMeIcon />}>
                          <Typography>Get Qualified Candidates</Typography>
                        </StyledActionButton>
                      </Stack>
                    </ShPaper>
                  </Stack>
                )}
              </Box>
            ))}
          </Stack>
          {policyTemplate && (
            <Stack padding={3}>
              <Typography variant='h6' paddingBottom={2}>
                {' '}
                Similar Policy Templates
              </Typography>
              <Divider />
              <Grid container spacing={1} paddingTop={2}>
                {[...new Set(similarTemplates)].slice(0, 20).map((template, index) => (
                  <Grid item sm={12} md={6} key={index}>
                    <ShMuiLink noWrap component={RouterLink as any} to={`/resources/policy-templates/${template.toLowerCase().split(' ').join('-')}`} variant='subtitle2' paddingTop={1} noUnderline>
                      {truncateString(template, 40)}
                    </ShMuiLink>
                  </Grid>
                ))}
              </Grid>
              <ResourceCTA />
            </Stack>
          )}
        </ShContainer>
      </Stack>
    </Suspense>
  );
};

export default PolicyTemplatePage;
