import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, Chip, Grid, Stack, Typography, styled } from '@mui/material';
import { ResourceCTA } from './ResourceCTA';
import { ShContainer, ShGreenBtn, ShPaper } from '@smoothhiring/smooth-ui';
import { TemplateHeroEyebrow, TemplateHeroInner, TemplateHeroBox } from 'components/resources/Resources.styled';

const CategoryLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const TemplatePreviewBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.75),
  marginTop: theme.spacing(0.75),
}));

const emailCategories = [
  {
    label: 'Application Received',
    chip: 'Acknowledgment',
    chipColor: 'primary' as const,
    subject: 'We received your application — [Job Title] at [Company]',
    preview:
      "Hi [Candidate Name], thank you for applying to [Job Title]. We've received your application and our team will review it shortly. We'll be in touch within [X] business days.",
  },
  {
    label: 'Interview Invitation',
    chip: 'Scheduling',
    chipColor: 'success' as const,
    subject: 'Interview Invitation — [Job Title] at [Company]',
    preview:
      "Hi [Candidate Name], we were impressed with your background and would love to learn more. We'd like to invite you to interview for the [Job Title] role. Please use the link below to select a time that works for you.",
  },
  {
    label: 'Post-Interview Follow-Up',
    chip: 'Follow-Up',
    chipColor: 'primary' as const,
    subject: 'Thank you for meeting with us — [Job Title]',
    preview:
      "Hi [Candidate Name], thank you for taking the time to speak with us about the [Job Title] position. It was great learning more about your experience. We'll be in touch with next steps shortly.",
  },
  {
    label: 'Offer Letter',
    chip: 'Offer',
    chipColor: 'success' as const,
    subject: "We'd love to have you join the team — [Job Title] Offer",
    preview:
      "Hi [Candidate Name], we're excited to extend an offer for the [Job Title] position at [Company]. Please find your formal offer letter attached. We'd love for you to join us and look forward to your response.",
  },
  {
    label: 'Rejection Notice',
    chip: 'Declination',
    chipColor: 'default' as const,
    subject: 'Your application to [Company] — [Job Title]',
    preview:
      "Hi [Candidate Name], thank you for your interest in the [Job Title] position and for the time you invested in your application. After careful consideration, we've decided to move forward with other candidates. We appreciate your interest and wish you well.",
  },
  {
    label: 'Onboarding Welcome',
    chip: 'Onboarding',
    chipColor: 'success' as const,
    subject: "Welcome to the team! Here's what to expect on day one",
    preview:
      "Hi [Name], we're thrilled to have you joining us as [Job Title] on [Start Date]. Here's everything you need to know before your first day, including where to report, who to ask for, and what to bring.",
  },
];

export const EmailTemplatesPage = () => {
  return (
    <>
      <TemplateHeroBox>
        <TemplateHeroInner>
          <TemplateHeroEyebrow>
            <EmailOutlinedIcon sx={{ fontSize: '0.75rem' }} />
            HR Templates
          </TemplateHeroEyebrow>
          <Typography
            component='h1'
            sx={{ fontWeight: 700, fontSize: { xs: '1.625rem', sm: '2.125rem' }, letterSpacing: '-0.02em', color: 'text.primary' }}
          >
            Hiring Email Templates
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 560, lineHeight: 1.65 }}>
            Consistent candidate communication builds trust and protects your employer brand. These templates cover every stage — from the first acknowledgment to the welcome email on day one.
          </Typography>
        </TemplateHeroInner>
      </TemplateHeroBox>

      <ShContainer maxWidth='xl' margin='auto'>
        <Grid container spacing={2} paddingBottom={3}>
          {emailCategories.map((cat, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ShPaper variant='outlined' sx={{ height: '100%' }}>
                <Stack padding={3} gap={1} height='100%'>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                    <CategoryLabel variant='subtitle2'>{cat.label}</CategoryLabel>
                    <Chip label={cat.chip} color={cat.chipColor} size='small' variant='outlined' />
                  </Stack>
                  <Typography variant='caption' color='text.secondary' fontWeight={500}>
                    Subject: {cat.subject}
                  </Typography>
                  <TemplatePreviewBox>
                    <Typography variant='body2' color='text.secondary' sx={{ lineHeight: 1.7 }}>
                      {cat.preview}
                    </Typography>
                  </TemplatePreviewBox>
                </Stack>
              </ShPaper>
            </Grid>
          ))}
        </Grid>

        <ShPaper variant='outlined' sx={{ marginBottom: 4 }}>
          <Stack padding={3} gap={1.5}>
            <Typography variant='subtitle1' fontWeight={600}>
              Manage Email Templates Inside SmoothHiring
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              SmoothHiring's built-in email template system lets you create, personalize, and send candidate emails automatically as they move through your pipeline. Trigger emails based on stage changes, add custom fields, and keep your entire team aligned.
            </Typography>
            <Stack direction='row' flexWrap='wrap' gap={1} paddingTop={0.5}>
              {['Auto-send on stage change', 'Custom merge fields', 'Team shared templates', 'Mobile responsive'].map(
                (feature) => (
                  <Chip key={feature} label={feature} size='small' variant='outlined' color='primary' />
                )
              )}
            </Stack>
            <Box paddingTop={0.5}>
              <ShGreenBtn
                href='https://app.smoothhiring.com/employer/settings/tools/templates/application-received'
                disableElevation
                variant='contained'
                endIcon={<ArrowForwardIcon fontSize='small' />}
              >
                Manage Email Templates
              </ShGreenBtn>
            </Box>
          </Stack>
        </ShPaper>

        <ResourceCTA />
      </ShContainer>
    </>
  );
};

export default EmailTemplatesPage;
