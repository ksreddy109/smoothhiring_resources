import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { Box, CircularProgress, Container, Grow, List, ListItem, ListItemText, Rating, Stack, Typography, styled } from '@mui/material';
import { Notification, useNotification } from 'Modules/Core/Notification';
import JobDescription from 'assets/Images/JobDescription.svg';
import TopCandidates from 'assets/Images/TopCandidates.svg';
import { IsSmScreen, IsXsScreen, useAppDispatch, useAppSelector } from 'helpers/hooks';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { PrimaryThemeColor } from '@smoothhiring/smooth-ui';
import { HtmlRegex, SHSignUpLink } from 'shared/constants';
import { IAiJobDescriptionAndInterviewKitPayload } from 'store/slices/app/app-model';
import { getAiJobDescriptionByTitle } from 'store/slices/app/resources-slice';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { AI_TOOLS_DETAILS_JOB_DESCRIPTION, AI_TOOLS_TITLE_JOB_DESCRIPTION, CUSTOMER_TESTIMONIAL, JOB_DESCRIPTION_DESC_CARD_1, JOB_DESCRIPTION_DESC_CARD_2, JOB_DESCRIPTION_TITLE_CARD_1, JOB_DESCRIPTION_TITLE_CARD_2 } from './ResourcesConstants';
import { Helmet } from 'react-helmet-async';

const BulletListItem = styled(ListItem)({
  listStyleType: 'disc',
});

export const AiJobDescriptionPage = () => {
  const dispatch = useAppDispatch();
  const isSmScreen = IsSmScreen();
  const { aiJobDescription } = useAppSelector(state => state.app.resources);
  const notification = useNotification();
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const isXsScreen = IsXsScreen();
  const [industry, setIndustry] = useState<string>('');
  const [jobCompany, setJobCompany] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const { getAiJobDescStatus } = useAppSelector(state => state.app.resources);

  const formatJobDescription = (jobDescription: string) => {
    const lines = jobDescription.split('\n');

    return lines.map((line, index) => {
      const isHeading = line.includes(':');
      const isListElement = /^\d+\./.test(line.trim()) || line.trim().includes('-');

      return isHeading ? (
        <Typography key={index} variant='body1' fontWeight={'bold'}>
          {line}
        </Typography>
      ) : isListElement ? (
        <BulletListItem key={index} dense>
          <ListItemText primary={line.replace(/^-|\d+\./, '•')} />
        </BulletListItem>
      ) : (
        <List key={index} dense>
          <ListItemText primary={line} />
        </List>
      );
    });
  };

  useEffect(() => {
    if (copiedToClipboard) {
      notification.displayNotification({
        open: true,
        type: 'success',
        message: 'Successfully Copied!',
      });
      setCopiedToClipboard(false);
    }
  }, [copiedToClipboard, notification]);

  const handleCopyAllClick = () => {
    navigator.clipboard.writeText(aiJobDescription ?? '').then(() => {
      setCopiedToClipboard(true);
    });
  };

  const handleSubmit = () => {
    if (role) {
      let payload: IAiJobDescriptionAndInterviewKitPayload = { role };
      if (industry) {
        payload.industry = industry;
      }
      if (jobCompany) {
        payload.jobCompany = jobCompany;
      }
      dispatch(getAiJobDescriptionByTitle(payload));
    }
  };

  return (
    <>
      <Helmet>
        <title>Free AI-Powered Job Description Generator | SmoothHiring</title>
        <meta name='description' content='Our AI-powered job description generator makes it easy to create accurate job descriptions. Simplify the hiring process right now!' />
      </Helmet>
      <Container maxWidth='lg'>
        <Notification />
        <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
          <Box marginTop={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            <Typography component={'h1'} textAlign='center' gutterBottom fontSize={35} fontWeight={700} color={PrimaryThemeColor}>
              {AI_TOOLS_TITLE_JOB_DESCRIPTION}
            </Typography>
            <Typography textAlign='center' variant='subtitle1' marginBottom={{ xs: 4, sm: 4, md: 5, lg: 6 }}>
              {AI_TOOLS_DETAILS_JOB_DESCRIPTION}
            </Typography>
          </Box>
        </Grow>
        <Grow in={true} timeout={2000} mountOnEnter>
          <ShPaper variant='outlined'>
            <Stack padding={5} spacing={2} direction={isXsScreen ? 'column' : 'row'} alignItems='center' justifyContent='center'>
              <ShTextFieldV2
                size='medium'
                label='Company (Optional)'
                variant='outlined'
                fullWidth
                onChange={e => {
                  setJobCompany(e.target.value);
                }}
              />

              <ShTextFieldV2
                size='medium'
                label='Industry'
                variant='outlined'
                fullWidth
                onChange={e => {
                  setIndustry(e.target.value);
                }}
              />
              <ShTextFieldV2
                size='medium'
                label='Job Role'
                variant='outlined'
                fullWidth
                onChange={e => {
                  setRole(e.target.value);
                }}
              />
              <StyledActionButton size='large' color='primary' disabled={getAiJobDescStatus === 'pending'} startIcon={<AutoAwesomeIcon />} variant='contained' onClick={() => handleSubmit()}>
                <Typography>Generate</Typography>
                {getAiJobDescStatus === 'pending' ? <CircularProgress size='1.5rem' /> : ''}
              </StyledActionButton>
            </Stack>
          </ShPaper>
        </Grow>
        <Grow in={true} timeout={3000} mountOnEnter unmountOnExit>
          <Stack paddingTop={4} spacing={2} justifyContent='center' alignItems='center'>
            <Typography variant='body2' textAlign='center' maxWidth={600}>
              {CUSTOMER_TESTIMONIAL.testimonial}
            </Typography>
          </Stack>
        </Grow>
        <Grow in={true} timeout={3500} mountOnEnter unmountOnExit>
          <Box>
            <Stack padding={2} direction='row' justifyContent='center' spacing={2} alignItems='center'>
              <Typography variant='body2'>{CUSTOMER_TESTIMONIAL.name}</Typography>
              <Rating size='small' name='fixed-rating' value={CUSTOMER_TESTIMONIAL.rating} readOnly />
            </Stack>
          </Box>
        </Grow>
        {aiJobDescription && (
          <Grow in={true} timeout={2000} mountOnEnter>
            <ShPaper variant='outlined'>
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='right' padding={2} spacing={1}>
                <StyledActionButton color='success' href={SHSignUpLink} startIcon={<BookmarkAddIcon />}>
                  Post This Job to 100+ Boards Instantly!
                </StyledActionButton>
                <StyledActionButton color='primary' onClick={handleCopyAllClick} startIcon={<CopyAllIcon />}>
                  Copy
                </StyledActionButton>
              </Stack>
              <Container>{HtmlRegex.test(aiJobDescription ?? '') ? parse(aiJobDescription ?? '') : formatJobDescription(aiJobDescription)}</Container>
            </ShPaper>
          </Grow>
        )}
        <>
          <Stack padding={4} direction={isSmScreen ? 'column' : 'row'} justifyContent={'center'} alignItems='center' spacing={5}>
            <Stack direction={'column'} spacing={3}>
              <Typography display='flex' alignItems='center' variant='h5' fontWeight='bold' maxWidth={450}>
                <ThreePIcon color='primary' />
                &nbsp;
                {JOB_DESCRIPTION_TITLE_CARD_1}
              </Typography>
              <Typography variant='body1' textAlign='left' maxWidth={500}>
                {JOB_DESCRIPTION_DESC_CARD_1}
              </Typography>
              <StyledActionButton href='https://smoothhiring.com/applicant-tracking-system-in-finding-top-candidates/' color='primary' variant='contained'>
                Read More
              </StyledActionButton>
            </Stack>
            <img src={TopCandidates} alt='TopCandidates' />
          </Stack>

          <Stack padding={4} direction={isSmScreen ? 'column' : 'row'} justifyContent={'center'} alignItems='center' spacing={5}>
            {isSmScreen ? (
              <>
                <Stack direction={'column'} spacing={3}>
                  <Typography display='flex' alignItems='center' variant='h5' fontWeight='bold' maxWidth={500}>
                    <ArticleIcon color='primary' />
                    &nbsp;
                    {JOB_DESCRIPTION_TITLE_CARD_2}
                  </Typography>
                  <Typography variant='body1' textAlign='left' maxWidth={500}>
                    {JOB_DESCRIPTION_DESC_CARD_2}
                  </Typography>
                </Stack>
                <img src={JobDescription} alt='TopCandidates' />
              </>
            ) : (
              <>
                <img src={JobDescription} alt='TopCandidates' />
                <Stack direction={'column'} spacing={3}>
                  <Typography display='flex' alignItems='center' variant='h5' fontWeight='bold' maxWidth={500}>
                    <ArticleIcon color='primary' />
                    &nbsp;
                    {JOB_DESCRIPTION_TITLE_CARD_2}
                  </Typography>
                  <Typography variant='body1' textAlign='left' maxWidth={500}>
                    {JOB_DESCRIPTION_DESC_CARD_2}
                  </Typography>
                </Stack>
              </>
            )}
          </Stack>
        </>
      </Container>
    </>
  );
};

export default AiJobDescriptionPage;
