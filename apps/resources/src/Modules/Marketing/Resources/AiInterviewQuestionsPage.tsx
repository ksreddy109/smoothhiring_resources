import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import { Box, CircularProgress, Container, Divider, Stack, Typography } from '@mui/material';
import { Notification, useNotification } from 'Modules/Core/Notification';
import { useAppDispatch, useAppSelector } from 'helpers/hooks';
import { useEffect, useState } from 'react';
import {
  ResourceAiToolFormBody,
  ResourceAiToolFormRow,
  ShButton,
  ShGreenBtn,
  ShPaper,
  ShTextFieldV2,
} from '@smoothhiring/smooth-ui';
import { getAiInterviewQuestions } from 'store/slices/app/resources-slice';
import { AI_TOOLS_DETAILS_INTERVIEW_KIT, AI_TOOLS_TITLE_INTERVIEW_KIT } from './ResourcesConstants';
import { SHSignUpLink } from 'shared/constants';
import { MarketingFlushContainer, MarketingHero, MarketingPage } from '@/components/resources/layout';
import { ResourceMarketingActionRow } from '@/components/resources/resource-buttons.styled';
import { ResourceCTA } from './ResourceCTA';

export const AiInterviewQuestionsPage = () => {
  const dispatch = useAppDispatch();
  const { aiInterviewQuestions, getAiInterviewQuestionsStatus, getAiInterviewQuestionsResponse } =
    useAppSelector(state => state.app.resources);
  const notification = useNotification();
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);
  const [industry, setIndustry] = useState<string>('');
  const [role, setRole] = useState<string>('');

  useEffect(() => {
    if (copiedToClipboard) {
      notification.displayNotification({ open: true, type: 'success', message: 'Successfully Copied!' });
      setCopiedToClipboard(false);
    }
  }, [copiedToClipboard, notification]);

  useEffect(() => {
    if (getAiInterviewQuestionsStatus === 'failed' && getAiInterviewQuestionsResponse) {
      notification.displayNotification({ open: true, type: 'error', message: getAiInterviewQuestionsResponse });
    }
  }, [getAiInterviewQuestionsStatus, getAiInterviewQuestionsResponse, notification]);

  const handleCopyAllClick = () => {
    const questionsAndAnswers = aiInterviewQuestions?.description?.questions?.map(q => `${q.question}\n${q.answer}`).join('\n\n') ?? '';
    navigator.clipboard.writeText(questionsAndAnswers).then(() => setCopiedToClipboard(true));
  };

  const handleSubmit = () => {
    const trimmedRole = role.trim();
    if (!trimmedRole) {
      notification.displayNotification({
        open: true,
        type: 'error',
        message: 'Please enter a job role to generate an interview kit.',
      });
      return;
    }
    dispatch(
      getAiInterviewQuestions({
        role: trimmedRole,
        industry: industry.trim() || undefined,
      })
    );
  };

  return (
    <MarketingPage maxWidth='lg'>
      <MarketingHero
        eyebrow={{ label: 'AI-Powered Tool' }}
        title={AI_TOOLS_TITLE_INTERVIEW_KIT}
        description={AI_TOOLS_DETAILS_INTERVIEW_KIT}
      />

      <MarketingFlushContainer maxWidth='lg' disableGutters>
        <Notification />

        <Box paddingTop={3} paddingBottom={2}>
          <ShPaper variant='outlined'>
            <ResourceAiToolFormBody>
              <ResourceAiToolFormRow>
                <ShTextFieldV2
                  size='small'
                  label='Industry'
                  variant='outlined'
                  fullWidth
                  onChange={e => setIndustry(e.target.value)}
                />
                <ShTextFieldV2
                  size='small'
                  label='Job Role'
                  variant='outlined'
                  fullWidth
                  required
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                />
                <ShGreenBtn
                  className='resource-ai-tool-submit'
                  size='medium'
                  disableElevation
                  disabled={getAiInterviewQuestionsStatus === 'pending'}
                  startIcon={<AutoAwesomeIcon />}
                  variant='contained'
                  onClick={handleSubmit}
                >
                  Generate
                  {getAiInterviewQuestionsStatus === 'pending' && <CircularProgress size='1.25rem' color='inherit' />}
                </ShGreenBtn>
              </ResourceAiToolFormRow>
            </ResourceAiToolFormBody>
          </ShPaper>
        </Box>

        {aiInterviewQuestions && (
          <Box marginBottom={2}>
            <ShPaper variant='outlined'>
              <ResourceMarketingActionRow>
                <ShGreenBtn
                  href={SHSignUpLink}
                  size='medium'
                  startIcon={<BookmarkAddIcon />}
                  variant='contained'
                  disableElevation
                >
                  Post This Job to 100+ Boards Instantly!
                </ShGreenBtn>
                <ShButton
                  color='primary'
                  size='medium'
                  onClick={handleCopyAllClick}
                  startIcon={<ContentCopyOutlinedIcon />}
                  variant='contained'
                  disableElevation
                >
                  Copy All
                </ShButton>
              </ResourceMarketingActionRow>
              <Stack>
                {aiInterviewQuestions?.description?.questions?.map((q, index) => (
                  <Box padding={1} key={index + '_q_a_pair'}>
                    <Typography variant='subtitle2' gutterBottom>
                      {q.question}
                    </Typography>
                    <Typography variant='body2' color='text.secondary' marginBottom={2}>
                      {q.answer}
                    </Typography>
                    {index !== (aiInterviewQuestions?.description?.questions?.length ?? 0) - 1 && <Divider />}
                  </Box>
                ))}
              </Stack>
            </ShPaper>
          </Box>
        )}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} paddingY={3} alignItems='center' justifyContent='center'>
          <RecordVoiceOverOutlinedIcon color='primary' sx={{ fontSize: 40 }} />
          <Stack spacing={0.5} maxWidth={560}>
            <Typography variant='subtitle1'>Go into every interview prepared</Typography>
            <Typography variant='body2' color='text.secondary'>
              Each kit includes role-specific questions, suggested follow-ups, and evaluation guidance — so every interviewer on your team walks in ready.
            </Typography>
          </Stack>
        </Stack>

        <Box paddingY={4}>
          <Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
            What Is an Interview Kit?
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            An interview kit is a structured set of materials that helps a hiring team run consistent, fair interviews for a specific role. A complete interview kit includes role-specific questions mapped to the skills and competencies that matter, suggested follow-ups, evaluation criteria, and a scorecard for rating each candidate the same way. Instead of every interviewer improvising, an interview kit makes sure each candidate is assessed against the same standard — which reduces bias and makes hiring decisions easier to compare and defend.
          </Typography>

          <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
            How to Build a Structured Interview Kit
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            Start by identifying the four or five core competencies the role actually requires — a mix of technical skills, behavioral traits, and role-specific knowledge. Write two to three questions for each competency, using behavioral and situational formats ("Tell me about a time…", "How would you handle…") that reveal real experience rather than rehearsed answers. Define what a strong, average, and weak answer looks like for each question, then capture those ratings on a shared scorecard. SmoothHiring's AI interview kit generator does all of this automatically — you get a structured interview kit, ready to use, in seconds.
          </Typography>

          <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
            Why Use an AI Interview Kit Generator
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            Building interview kits by hand is slow, and inconsistent kits lead to inconsistent hiring. An AI interview kit generator removes both problems. It produces role-specific questions instantly, keeps the structure consistent across every interviewer and every candidate, and includes a scorecard so feedback is objective and comparable. The result is faster interview prep, fairer evaluations, and better hiring decisions — without the manual work of writing questions from scratch for every role.
          </Typography>
        </Box>

        <ResourceCTA />
      </MarketingFlushContainer>
    </MarketingPage>
  );
};

export default AiInterviewQuestionsPage;
