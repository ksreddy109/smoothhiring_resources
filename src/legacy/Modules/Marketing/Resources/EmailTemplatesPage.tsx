import { Box, Stack, Typography } from '@mui/material';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { IsXsScreen } from 'helpers/hooks';
import { ResourceTypography } from 'Modules/Marketing/Resources/Resources.styled';
import { ShContainer } from '@smoothhiring/smooth-ui';

export const EmailTemplatesPage = () => {
  const paddingValue = IsXsScreen() ? 1 : 3;

  return (
    <>
      <ShContainer maxWidth='xl' margin='auto'>
        <Stack direction='row'>
          <Stack padding={paddingValue}>
            <ResourceTypography variant='body1' gutterBottom>
              Email Template Management
            </ResourceTypography>
            <ResourceTypography variant='body1' paragraph>
              Create professional, consistent email communications with our comprehensive email template system. Design templates for various hiring scenarios including application confirmations, interview invitations, offer letters, and rejection notifications. Maintain your brand voice and ensure all candidate communications are professional and engaging.
            </ResourceTypography>

            <ResourceTypography variant='body1' gutterBottom>
              Template Creation and Design
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              Design email templates that reflect your company's brand and culture. Use our drag-and-drop editor to create visually appealing templates with your company logo, colors, and fonts. Include professional formatting, clear call-to-action buttons, and mobile-responsive design to ensure optimal viewing across all devices.
            </Typography>
            <Typography variant='body2' paragraph>
              Create templates for different stages of the hiring process, each with appropriate tone and content. Application confirmation emails should be welcoming and informative, while interview invitations should be professional and detailed. Offer letters should be celebratory and comprehensive.
            </Typography>

            <ResourceTypography variant='body1' gutterBottom>
              Personalization and Dynamic Content
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              Use dynamic content fields to personalize your email templates with candidate-specific information. Include candidate names, job titles, company names, interview dates, and other relevant details automatically. This personalization makes emails more engaging and professional.
            </Typography>
            <Typography variant='body2' paragraph>
              Set up conditional content that changes based on candidate status, job requirements, or other criteria. For example, include different interview instructions for remote vs. in-person interviews, or customize offer details based on the specific position.
            </Typography>

            <ResourceTypography variant='body1' gutterBottom>
              Template Categories and Organization
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              Organize your email templates into logical categories for easy management and access. Create separate template libraries for application communications, interview processes, offer management, and general candidate communications. Use naming conventions that make it easy to find and select the right template.
            </Typography>
            <Typography variant='body2' paragraph>
              Maintain version control for your templates to track changes and ensure consistency. Archive old versions and create new iterations when updating templates to maintain a clear history of changes and improvements.
            </Typography>

            <ResourceTypography variant='body1' gutterBottom>
              A/B Testing and Optimization
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              Test different email templates to optimize engagement and response rates. Use A/B testing to compare subject lines, content variations, call-to-action buttons, and design elements. Track open rates, click-through rates, and response rates to identify the most effective templates.
            </Typography>
            <Typography variant='body2' paragraph>
              Analyze email performance data to continuously improve your templates. Identify patterns in what works best for different types of candidates and hiring stages. Use this data to refine your templates and improve overall candidate experience.
            </Typography>

            <ResourceTypography variant='body1' gutterBottom>
              Compliance and Legal Considerations
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              Ensure your email templates comply with relevant laws and regulations including CAN-SPAM, GDPR, and other privacy laws. Include necessary disclaimers, unsubscribe options, and privacy notices where required. Review templates regularly to ensure ongoing compliance with changing regulations.
            </Typography>
            <Typography variant='body2' paragraph>
              Include equal opportunity statements and non-discrimination language in your communications. Ensure that all email content is inclusive and accessible to candidates with disabilities. Consider providing alternative formats for candidates who may need accommodations.
            </Typography>

            <ResourceTypography variant='body1' gutterBottom>
              Automation and Workflow Integration
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              Integrate email templates with your hiring workflow automation to send timely, relevant communications automatically. Set up triggers to send emails when candidates move through different stages of your hiring process. This ensures consistent communication and reduces manual work for your team.
            </Typography>
            <Typography variant='body2' paragraph>
              Create email sequences for complex hiring processes that require multiple communications. For example, set up a series of emails for interview preparation, follow-up, and next steps. Use delays and conditions to ensure emails are sent at appropriate times.
            </Typography>

            <ResourceTypography variant='body1' gutterBottom>
              Team Collaboration and Approval
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              Enable team collaboration on email template creation and management. Set up approval workflows for new templates or significant changes to ensure quality and consistency. Allow team members to suggest improvements and share best practices for effective email communication.
            </Typography>
            <Typography variant='body2' paragraph>
              Create template libraries that can be shared across different departments or hiring teams. Establish guidelines for template usage and ensure all team members understand how to use templates effectively and consistently.
            </Typography>

            <ResourceTypography variant='body1' gutterBottom>
              Analytics and Performance Tracking
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              Track the performance of your email templates with detailed analytics and reporting. Monitor delivery rates, open rates, click-through rates, and response rates for each template. Use this data to identify opportunities for improvement and optimize your email communication strategy.
            </Typography>
            <Typography variant='body2' paragraph>
              Generate reports on email effectiveness by candidate type, job category, or hiring stage. Use this information to refine your templates and improve overall candidate engagement and response rates.
            </Typography>

            <ResourceTypography variant='body1' gutterBottom>
              Best Practices for Email Templates
            </ResourceTypography>
            <Typography variant='body2' paragraph>
              • Use clear, professional subject lines that encourage opens
            </Typography>
            <Typography variant='body2' paragraph>
              • Keep content concise and focused on the key message
            </Typography>
            <Typography variant='body2' paragraph>
              • Include clear call-to-action buttons and next steps
            </Typography>
            <Typography variant='body2' paragraph>
              • Test templates across different email clients and devices
            </Typography>
            <Typography variant='body2' paragraph>
              • Personalize content with candidate-specific information
            </Typography>
            <Typography variant='body2' paragraph>
              • Regularly review and update templates based on performance data
            </Typography>

            <Box paddingTop={2} paddingBottom={3}>
              <StyledActionButton href="https://app.smoothhiring.com/employer/settings/tools/templates/application-received" color="primary" variant="contained" component="a">
                Manage Email Templates
              </StyledActionButton>
            </Box>
          </Stack>
        </Stack>
      </ShContainer>
    </>
  );
};

export default EmailTemplatesPage;
