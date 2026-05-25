import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import { Box, CircularProgress, Container, List, ListItem, ListItemText, Rating, Stack, Typography, styled } from '@mui/material';
import { Notification, useNotification } from 'Modules/Core/Notification';
import { useAppDispatch, useAppSelector } from 'helpers/hooks';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import {
  ResourceAiToolFormBody,
  ResourceAiToolFormRow,
  ShButton,
  ShGreenBtn,
  ShPaper,
  ShTextFieldV2,
} from '@smoothhiring/smooth-ui';
import { HtmlRegex, SHSignUpLink } from 'shared/constants';
import { IAiJobDescriptionAndInterviewKitPayload } from 'store/slices/app/app-model';
import { getAiJobDescriptionByTitle } from 'store/slices/app/resources-slice';
import { AI_TOOLS_DETAILS_JOB_DESCRIPTION, AI_TOOLS_TITLE_JOB_DESCRIPTION, CUSTOMER_TESTIMONIAL } from './ResourcesConstants';
import { MarketingFlushContainer, MarketingHero, MarketingPage } from '@/components/resources/layout';
import { ResourceMarketingActionRow } from '@/components/resources/resource-buttons.styled';
import { ResourceCTA } from './ResourceCTA';

const BulletListItem = styled(ListItem)({
  listStyleType: 'disc',
});

export const AiJobDescriptionPage = () => {
  const dispatch = useAppDispatch();
  const { aiJobDescription } = useAppSelector(state => state.app.resources);
  const notification = useNotification();
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
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
        <Typography key={index} variant='body2'>{line}</Typography>
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
      notification.displayNotification({ open: true, type: 'success', message: 'Successfully Copied!' });
      setCopiedToClipboard(false);
    }
  }, [copiedToClipboard, notification]);

  const handleCopyAllClick = () => {
    navigator.clipboard.writeText(aiJobDescription ?? '').then(() => setCopiedToClipboard(true));
  };

  const handleSubmit = () => {
    if (role) {
      let payload: IAiJobDescriptionAndInterviewKitPayload = { role };
      if (industry) payload.industry = industry;
      if (jobCompany) payload.jobCompany = jobCompany;
      dispatch(getAiJobDescriptionByTitle(payload));
    }
  };

  return (
    <MarketingPage maxWidth='lg'>
      <MarketingHero
        eyebrow={{ label: 'AI-Powered Tool', icon: AutoAwesomeIcon }}
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
                  onChange={e => setRole(e.target.value)}
                />
                <ShGreenBtn
                  className='resource-ai-tool-submit'
                  size='medium'
                  disableElevation
                  disabled={getAiJobDescStatus === 'pending'}
                  startIcon={<AutoAwesomeIcon />}
                  variant='contained'
                  onClick={handleSubmit}
                >
                  Generate
                  {getAiJobDescStatus === 'pending' && <CircularProgress size='1.25rem' color='inherit' />}
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

        {aiJobDescription && (
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
              <Container>{HtmlRegex.test(aiJobDescription ?? '') ? parse(aiJobDescription ?? '') : formatJobDescription(aiJobDescription)}</Container>
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

        <ResourceCTA />
      </MarketingFlushContainer>
    </MarketingPage>
  );
};

export default AiJobDescriptionPage;
