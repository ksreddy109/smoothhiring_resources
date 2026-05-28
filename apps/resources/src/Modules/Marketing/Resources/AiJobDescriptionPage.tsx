import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import { Box, List, ListItem, ListItemText, Rating, Stack, Typography } from '@mui/material';
import { Notification, useNotification } from 'Modules/Core/Notification';
import { useAppDispatch, useAppSelector } from 'helpers/hooks';
import { useEffect, useState } from 'react';
import { SHSignUpLink } from 'shared/constants';
import { IAiJobDescriptionAndInterviewKitPayload } from 'store/slices/app/app-model';
import { getAiJobDescriptionByTitle } from 'store/slices/app/resources-slice';
import { AI_TOOLS_DETAILS_JOB_DESCRIPTION, AI_TOOLS_TITLE_JOB_DESCRIPTION, CUSTOMER_TESTIMONIAL } from './ResourcesConstants';
import { MarketingFlushContainer, MarketingHero, MarketingPage } from '@/components/resources/layout';
import { ResourceCTA } from './ResourceCTA';
import {
  ResourceActionRowEnd,
  ResourceAiToolFormBody,
  ResourceAiToolFormRow,
  ShButton,
  ShGreenBtn,
  ShLoader,
  ShPaper,
  ShTextFieldV2,
  ThemeColorDivider,
} from '@/integrations/smooth-hiring-ui';
import { AiJobDescriptionEditor } from './AiJobDescriptionEditor';
import { AiJobDescriptionGeneratingPanel } from './AiJobDescriptionGeneratingPanel';
import { jobDescriptionToQuillHtml, quillHtmlToPlainText } from './jobDescriptionContent';

export const AiJobDescriptionPage = () => {
  const dispatch = useAppDispatch();
  const { aiJobDescription } = useAppSelector(state => state.app.resources);
  const notification = useNotification();
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [industry, setIndustry] = useState<string>('');
  const [jobCompany, setJobCompany] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [editorHtml, setEditorHtml] = useState('');
  const { getAiJobDescStatus, getAiJobDescResponse } = useAppSelector(state => state.app.resources);
  const isGenerating = getAiJobDescStatus === 'pending';
  const showResultPanel = isGenerating || Boolean(aiJobDescription);

  useEffect(() => {
    if (getAiJobDescStatus === 'success' && aiJobDescription) {
      setEditorHtml(jobDescriptionToQuillHtml(aiJobDescription));
    }
  }, [aiJobDescription, getAiJobDescStatus]);

  useEffect(() => {
    if (copiedToClipboard) {
      notification.displayNotification({ open: true, type: 'success', message: 'Successfully Copied!' });
      setCopiedToClipboard(false);
    }
  }, [copiedToClipboard, notification]);

  useEffect(() => {
    if (getAiJobDescStatus === 'failed' && getAiJobDescResponse) {
      notification.displayNotification({ open: true, type: 'error', message: getAiJobDescResponse });
    }
  }, [getAiJobDescStatus, getAiJobDescResponse, notification]);

  const handleCopyAllClick = () => {
    const text = quillHtmlToPlainText(editorHtml || aiJobDescription || '');
    navigator.clipboard.writeText(text).then(() => setCopiedToClipboard(true));
  };

  const handleSubmit = () => {
    const trimmedRole = role.trim();
    if (!trimmedRole) {
      notification.displayNotification({
        open: true,
        type: 'error',
        message: 'Please enter a job role to generate a description.',
      });
      return;
    }
    const payload: IAiJobDescriptionAndInterviewKitPayload = { role: trimmedRole };
    if (industry.trim()) payload.industry = industry.trim();
    if (jobCompany.trim()) payload.jobCompany = jobCompany.trim();
    dispatch(getAiJobDescriptionByTitle(payload));
  };

  return (
    <MarketingPage maxWidth='lg'>
      <MarketingHero
        eyebrow={{ label: 'AI-Powered Tool' }}
        title={AI_TOOLS_TITLE_JOB_DESCRIPTION}
        description={AI_TOOLS_DETAILS_JOB_DESCRIPTION}
      />

      <MarketingFlushContainer maxWidth='lg' disableGutters>
        <Notification />

        <Box paddingTop={3} paddingBottom={2}>
          <ShPaper variant='outlined'>
            <ResourceAiToolFormBody>
              <ResourceAiToolFormRow>
                <ShTextFieldV2
                  size='small'
                  label='Company (Optional)'
                  variant='outlined'
                  fullWidth
                  onChange={e => setJobCompany(e.target.value)}
                />
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
                  disabled={isGenerating}
                  startIcon={isGenerating ? undefined : <AutoAwesomeIcon />}
                  endIcon={isGenerating ? <ShLoader size={18} thickness={4} /> : undefined}
                  variant='contained'
                  onClick={handleSubmit}
                  sx={{ minWidth: 148, gap: 1 }}
                >
                  {isGenerating ? 'Generating…' : 'Generate'}
                </ShGreenBtn>
              </ResourceAiToolFormRow>
            </ResourceAiToolFormBody>
          </ShPaper>
        </Box>

        <Stack paddingY={2} spacing={0.5} justifyContent='center' alignItems='center'>
          <Typography variant='body2' textAlign='center' color='text.secondary' maxWidth={600} fontStyle='italic'>
            "{CUSTOMER_TESTIMONIAL.testimonial}"
          </Typography>
          <Stack direction='row' spacing={2} alignItems='center' paddingTop={0.5}>
            <Typography variant='caption' color='text.secondary'>{CUSTOMER_TESTIMONIAL.name}</Typography>
            <Rating size='small' name='fixed-rating' value={CUSTOMER_TESTIMONIAL.rating} readOnly />
          </Stack>
        </Stack>

        {showResultPanel && (
          <Box marginBottom={2}>
            <ShPaper variant='outlined'>
              {isGenerating ? (
                <AiJobDescriptionGeneratingPanel role={role} />
              ) : (
                <>
                  <ResourceActionRowEnd>
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
                  </ResourceActionRowEnd>
                  <ThemeColorDivider />
                  <Typography variant='caption' color='text.secondary' sx={{ px: 2, pt: 1.5, pb: 0, display: 'block' }}>
                    Edit below before you copy or post — formatting is ready to go.
                  </Typography>
                  <AiJobDescriptionEditor value={editorHtml} onChange={setEditorHtml} />
                </>
              )}
            </ShPaper>
          </Box>
        )}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} paddingY={3} alignItems='center' justifyContent='center'>
          <WysiwygOutlinedIcon color='primary' sx={{ fontSize: 40 }} />
          <Stack spacing={0.5} maxWidth={560}>
            <Typography variant='subtitle1'>Format that gets read</Typography>
            <Typography variant='body2' color='text.secondary'>
              Most candidates spend fewer than 15 seconds on a job description. Our tool creates well-structured, scannable postings that communicate the essentials quickly.
            </Typography>
          </Stack>
        </Stack>

        <Box paddingY={4}>
          <Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
            How to Write a Job Description
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            Writing a clear job description starts with knowing exactly what the role needs to accomplish. Begin with an accurate job title, then write a short summary that explains the role's purpose and how it fits into your team. List the core responsibilities as bullet points, separate the "must-have" requirements from the "nice-to-have" ones, and be specific about skills, experience, and qualifications. Finish with details candidates actually care about — location, work arrangement, salary range, and benefits. The clearer and more honest your job description, the better the quality of applicants you'll attract.
          </Typography>

          <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
            What Makes a Great Job Description
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            A great job description is specific, inclusive, and easy to scan. The strongest postings share a few common elements:
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="A clear, searchable job title — use the title candidates actually search for, not an internal or creative one" /></ListItem>
            <ListItem><ListItemText primary="A compelling role summary — two to three sentences on what the person will do and why it matters" /></ListItem>
            <ListItem><ListItemText primary="Focused responsibilities — five to eight key duties, not an exhaustive list of every task" /></ListItem>
            <ListItem><ListItemText primary="Realistic requirements — separate essentials from preferences so you don't deter qualified applicants" /></ListItem>
            <ListItem><ListItemText primary="Inclusive language — neutral wording that welcomes a diverse range of candidates" /></ListItem>
            <ListItem><ListItemText primary="Transparency — salary range, location, and work model build trust and improve apply rates" /></ListItem>
          </List>

          <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
            Why Use an AI Job Description Generator
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            An AI job description generator removes the blank-page problem. Instead of starting from scratch, you enter a job title and a few details, and the tool produces a structured, professional draft in seconds. It keeps your formatting consistent across every role, suggests inclusive language automatically, and helps you avoid the vague or biased phrasing that quietly narrows your applicant pool. For busy hiring managers and recruiters, that means less time writing and more time talking to candidates — without sacrificing quality or consistency.
          </Typography>
        </Box>

        <ResourceCTA />
      </MarketingFlushContainer>
    </MarketingPage>
  );
};

export default AiJobDescriptionPage;
