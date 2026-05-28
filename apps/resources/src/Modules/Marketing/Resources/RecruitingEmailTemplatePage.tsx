import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { Box, Stack, Typography } from '@mui/material';
import { MarketingHero, MarketingPage } from '@/components/resources/layout';
import { ResourceMarketingActionRow } from '@/components/resources/resource-buttons.styled';
import { emailTemplateBySlug } from '@/lib/marketing-data/emailTemplateCatalog';
import { useResourceParams } from '@/lib/resources/route-context';
import { ShButton, ShGreenBtn, ShPaper } from '@smoothhiring/smooth-ui';
import { SHSignUpUrl } from '@/lib/resources-constants';
import { ResourceCTA } from './ResourceCTA';
import { useNotification } from 'Modules/Core/Notification';
import { useMemo } from 'react';

export const RecruitingEmailTemplatePage = () => {
  const { emailTemplateName } = useResourceParams<{ emailTemplateName: string }>();
  const notification = useNotification();
  const template = emailTemplateName ? emailTemplateBySlug.get(emailTemplateName) : undefined;

  const plainText = useMemo(() => {
    if (!template) return '';
    return [`Subject: ${template.subjectLine}`, '', ...template.bodyParagraphs].join('\n');
  }, [template]);

  if (!template) {
    return (
      <MarketingPage>
        <Typography variant='h5' padding={4}>
          Email template not found.
        </Typography>
      </MarketingPage>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(plainText).then(() => {
      notification.displayNotification({ open: true, type: 'success', message: 'Copied to clipboard!' });
    });
  };

  return (
    <MarketingPage maxWidth='lg'>
      <MarketingHero eyebrow={{ label: 'Recruiting email template' }} title={template.h1} description={template.intro} />

      <ShPaper variant='outlined' sx={{ mb: 3 }}>
        <ResourceMarketingActionRow sx={{ px: 2, pt: 2, pb: 0 }}>
          {template.dedicatedHubPath ? (
            <ShGreenBtn href={template.dedicatedHubPath} variant='contained' disableElevation size='medium'>
              Browse full template library
            </ShGreenBtn>
          ) : null}
          <ShButton
            variant='contained'
            color='primary'
            size='medium'
            disableElevation
            startIcon={<ContentCopyOutlinedIcon />}
            onClick={handleCopy}
          >
            Copy email
          </ShButton>
          <ShGreenBtn href={SHSignUpUrl} variant='contained' disableElevation size='medium'>
            Try SmoothHiring free
          </ShGreenBtn>
        </ResourceMarketingActionRow>

        <Box padding={{ xs: 2, sm: 3 }}>
          <Typography variant='overline' color='text.secondary'>
            Subject line
          </Typography>
          <Typography variant='subtitle1' fontWeight={600} gutterBottom>
            {template.subjectLine}
          </Typography>
          <Typography variant='overline' color='text.secondary' sx={{ mt: 2, display: 'block' }}>
            Email body
          </Typography>
          <Stack spacing={1.5} component='article'>
            {template.bodyParagraphs.map((paragraph, i) => (
              <Typography key={i} variant='body1' color='text.secondary' lineHeight={1.7}>
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Box>
      </ShPaper>

      <ResourceCTA buttonText='Post a job free' />
    </MarketingPage>
  );
};

export default RecruitingEmailTemplatePage;
