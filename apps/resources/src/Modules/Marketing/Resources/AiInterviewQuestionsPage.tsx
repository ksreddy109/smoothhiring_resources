import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import { Box, CircularProgress, Container, Divider, Stack, Typography } from '@mui/material';
import { Notification, useNotification } from 'Modules/Core/Notification';
import { useAppDispatch, useAppSelector } from 'helpers/hooks';
import { useEffect, useState } from 'react';
import {
  ResourceActionRowEnd,
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
import { TemplateHeroEyebrow, TemplateHeroInner, TemplateHeroBox } from 'components/resources/Resources.styled';
import { ResourceCTA } from './ResourceCTA';

export const AiInterviewQuestionsPage = () => {
  const dispatch = useAppDispatch();
  const { aiInterviewQuestions, getAiInterviewQuestionsStatus } = useAppSelector(state => state.app.resources);
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

  const handleCopyAllClick = () => {
    const questionsAndAnswers = aiInterviewQuestions?.description?.questions?.map(q => `${q.question}\n${q.answer}`).join('\n\n') ?? '';
    navigator.clipboard.writeText(questionsAndAnswers).then(() => setCopiedToClipboard(true));
  };

  const handleSubmit = () => {
    if (role) {
      dispatch(getAiInterviewQuestions({ role, industry }));
    }
  };

  return (
    <>
      <TemplateHeroBox>
        <TemplateHeroInner>
          <TemplateHeroEyebrow>
            <AutoAwesomeIcon sx={{ fontSize: '0.75rem' }} />
            AI-Powered Tool
          </TemplateHeroEyebrow>
          <Typography
            component='h1'
            sx={{ fontWeight: 700, fontSize: { xs: '1.625rem', sm: '2.125rem' }, letterSpacing: '-0.02em', color: 'text.primary' }}
          >
            {AI_TOOLS_TITLE_INTERVIEW_KIT}
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 520, lineHeight: 1.65 }}>
            {AI_TOOLS_DETAILS_INTERVIEW_KIT}
          </Typography>
        </TemplateHeroInner>
      </TemplateHeroBox>

      <Container maxWidth='lg'>
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
                  onChange={e => setRole(e.target.value)}
                />
                <ShGreenBtn
                  className='resource-ai-tool-submit'
                  size='large'
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
              <ResourceActionRowEnd>
                <ShGreenBtn href={SHSignUpLink} startIcon={<BookmarkAddIcon />} variant='contained' disableElevation>
                  Post This Job to 100+ Boards Instantly!
                </ShGreenBtn>
                <ShButton color='primary' onClick={handleCopyAllClick} startIcon={<ContentCopyOutlinedIcon />} variant='contained'>
                  Copy All
                </ShButton>
              </ResourceActionRowEnd>
              <Stack>
                {aiInterviewQuestions?.description?.questions?.map((q, index) => (
                  <Box padding={1} key={index + '_q_a_pair'}>
                    <Typography variant='subtitle2' fontWeight={600} gutterBottom>
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
            <Typography variant='subtitle1' fontWeight={600}>Go into every interview prepared</Typography>
            <Typography variant='body2' color='text.secondary'>
              Each kit includes role-specific questions, suggested follow-ups, and evaluation guidance — so every interviewer on your team walks in ready.
            </Typography>
          </Stack>
        </Stack>

        <ResourceCTA />
      </Container>
    </>
  );
};

export default AiInterviewQuestionsPage;
