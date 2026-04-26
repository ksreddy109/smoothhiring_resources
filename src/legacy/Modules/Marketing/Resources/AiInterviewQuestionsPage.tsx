import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { CircularProgress, Container, Divider, Grow, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Notification, useNotification } from 'Modules/Core/Notification';
import InterviewCandidates from 'assets/Images/InterviewCandidates.svg';
import SaveTime from 'assets/Images/SaveTime.svg';
import { IsSmScreen, IsXsScreen, useAppDispatch, useAppSelector } from 'helpers/hooks';
import { useEffect, useState } from 'react';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { PrimaryThemeColor } from '@smoothhiring/smooth-ui';
import { getAiInterviewQuestions } from 'store/slices/app/resources-slice';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { AI_TOOLS_DETAILS_INTERVIEW_KIT, AI_TOOLS_TITLE_INTERVIEW_KIT, JOB_INTERVIEW_KIT_DESC_CARD_1, JOB_INTERVIEW_KIT_DESC_CARD_2, JOB_INTERVIEW_KIT_TITLE_CARD_1, JOB_INTERVIEW_KIT_TITLE_CARD_2 } from './ResourcesConstants';
import { Helmet } from 'react-helmet-async';
import { SHSignUpLink } from 'shared/constants';

export const AiInterviewQuestionsPage = () => {
  const dispatch = useAppDispatch();
  const isXsScreen = IsXsScreen();
  const isSmScreen = IsSmScreen();
  const { aiInterviewQuestions, getAiInterviewQuestionsStatus } = useAppSelector(state => state.app.resources);
  const notification = useNotification();
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);
  const [industry, setIndustry] = useState<string>('');
  const [role, setRole] = useState<string>('');

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
    const questionsAndAnswers = aiInterviewQuestions?.description?.questions?.map(q => `${q.question}\n${q.answer}`).join('\n\n') ?? '';
    navigator.clipboard.writeText(questionsAndAnswers).then(() => {
      setCopiedToClipboard(true);
    });
  };

  const handleSubmit = () => {
    if (role) {
      dispatch(getAiInterviewQuestions({ role: role, industry: industry }));
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Interview Kit for Smarter Hiring | SmoothHiring</title>
        <meta name='description' content='Enhance your hiring with our AI interview kit. Get structured, insightful interview guides and make informed hiring decisions effortlessly' />
      </Helmet>
      <Container maxWidth='lg'>
        <Notification />
        <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
          <Box marginTop={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            <Typography component={'h1'} textAlign='center' gutterBottom fontSize={35} fontWeight={700} color={PrimaryThemeColor}>
              {AI_TOOLS_TITLE_INTERVIEW_KIT}
            </Typography>
            <Typography textAlign='center' variant='subtitle1' marginBottom={{ xs: 4, sm: 4, md: 5, lg: 6 }}>
              {AI_TOOLS_DETAILS_INTERVIEW_KIT}
            </Typography>
          </Box>
        </Grow>
        <Grow in={true} timeout={2000} mountOnEnter>
          <ShPaper variant='outlined'>
            <Stack padding={5} spacing={2} direction={isXsScreen ? 'column' : 'row'} alignItems='center' justifyContent='center'>
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
              <StyledActionButton size='large' color='primary' disabled={getAiInterviewQuestionsStatus === 'pending'} startIcon={<AutoAwesomeIcon />} variant='contained' onClick={() => handleSubmit()}>
                <Typography>Generate</Typography>
                {getAiInterviewQuestionsStatus === 'pending' ? <CircularProgress size='1.5rem' /> : ''}
              </StyledActionButton>
            </Stack>
          </ShPaper>
        </Grow>
        {aiInterviewQuestions && (
          <Grow in={true} timeout={2000} mountOnEnter>
            <Box marginTop={2}>
              <ShPaper variant='outlined'>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='right' padding={2} spacing={1}>
                  <StyledActionButton color='success' href={SHSignUpLink} startIcon={<BookmarkAddIcon />}>
                    Post This Job to 100+ Boards Instantly!
                  </StyledActionButton>
                  <StyledActionButton color='primary' onClick={handleCopyAllClick} startIcon={<CopyAllIcon />}>
                    Copy
                  </StyledActionButton>
                </Stack>
                <Stack paddingLeft={1}>
                  {aiInterviewQuestions?.description?.questions?.map((q, index) => (
                    <Box padding={1} key={index + '_q_a_pair'}>
                      <Stack direction='row' alignItems='center' spacing={1}>
                        <Typography variant='subtitle1' fontWeight={'bold'}>
                          {q.question}
                        </Typography>
                      </Stack>
                      <Stack direction='row' alignItems='center'>
                        <Typography marginBottom={2} variant='body2'>
                          {q.answer}
                        </Typography>
                      </Stack>
                      {index !== aiInterviewQuestions?.description?.questions?.length - 1 && <Divider />}
                    </Box>
                  ))}
                </Stack>
              </ShPaper>
            </Box>
          </Grow>
        )}
        <>
          <Stack padding={4} direction={isSmScreen ? 'column' : 'row'} justifyContent={'center'} alignItems='center' spacing={5}>
            <Stack direction={'column'} spacing={3}>
              <Typography display='flex' alignItems='center' variant='h5' fontWeight='bold' maxWidth={450}>
                <ThreePIcon color='primary' />
                &nbsp;
                {JOB_INTERVIEW_KIT_TITLE_CARD_1}
              </Typography>
              <Typography variant='body1' textAlign='left' maxWidth={500}>
                {JOB_INTERVIEW_KIT_DESC_CARD_1}
              </Typography>
              <StyledActionButton href='https://smoothhiring.com/applicant-tracking-system-in-finding-top-candidates/' color='primary' variant='contained'>
                Read More
              </StyledActionButton>
            </Stack>

            <img src={InterviewCandidates} alt='InterviewCandidates' />
          </Stack>
          <Stack padding={4} direction={isSmScreen ? 'column' : 'row'} justifyContent={'center'} alignItems='center' spacing={5}>
            {isSmScreen ? (
              <>
                <Stack direction={'column'} spacing={3}>
                  <Typography display='flex' alignItems='center' variant='h5' fontWeight='bold' maxWidth={500}>
                    <ArticleIcon color='primary' />
                    &nbsp;
                    {JOB_INTERVIEW_KIT_TITLE_CARD_2}
                  </Typography>
                  <Typography variant='body1' textAlign='left' maxWidth={500}>
                    {JOB_INTERVIEW_KIT_DESC_CARD_2}
                  </Typography>
                </Stack>
                <img src={SaveTime} alt='TopCandidates' />
              </>
            ) : (
              <>
                <img src={SaveTime} alt='TopCandidates' />
                <Stack direction={'column'} spacing={3}>
                  <Typography display='flex' alignItems='center' variant='h5' fontWeight='bold' maxWidth={500}>
                    <ArticleIcon color='primary' />
                    &nbsp;
                    {JOB_INTERVIEW_KIT_TITLE_CARD_2}
                  </Typography>
                  <Typography variant='body1' textAlign='left' maxWidth={500}>
                    {JOB_INTERVIEW_KIT_DESC_CARD_2}
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

export default AiInterviewQuestionsPage;
