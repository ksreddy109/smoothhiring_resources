'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Divider, Grid, IconButton, Stack, Typography, styled } from '@mui/material';
import { ShContainer } from '@/integrations/smooth-hiring-ui';
import { ResourceMuiLink } from './Resources.styled';

const FooterRoot = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const LogoImg = styled('img')({
  height: 32,
  objectFit: 'contain',
});

const FooterLinkGroup = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(0.75),
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.primary,
}));

const BottomBar = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const ContactRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

const SocialRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(0.5),
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.5),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const footerSections = [
  {
    title: 'Company',
    links: [
      { href: 'https://smoothhiring.com', label: 'Home' },
      { href: 'https://smoothhiring.com/About-Us', label: 'About Us' },
      { href: 'https://smoothhiring.com/testimonials', label: 'Testimonials' },
      { href: 'https://smoothhiring.com/blog', label: 'Blog' },
      { href: 'https://help.smoothhiring.com/help', label: 'Contact Us' },
    ],
  },
  {
    title: 'Product',
    links: [
      { href: 'https://smoothhiring.com/integrations', label: 'Integrations' },
      { href: 'https://smoothhiring.com/pricing', label: 'Pricing' },
      { href: 'https://smoothhiring.com/frequently-asked-questions/', label: 'FAQs' },
      { href: 'https://help.smoothhiring.com/help', label: 'Help Center' },
      { href: 'https://calendly.com/admin-1ue9/30min', label: 'Request a Demo' },
    ],
  },
  {
    title: 'Features',
    links: [
      { href: 'https://smoothhiring.com/all-features', label: 'All Features' },
      { href: 'https://smoothhiring.com/job-distribution', label: 'Job Board Distribution' },
      { href: 'https://smoothhiring.com/predictive-analytics', label: 'Predictive Analytics' },
      { href: 'https://smoothhiring.com/applicant-tracking/', label: 'Applicant Tracking (ATS)' },
      { href: 'https://smoothhiring.com/careers-pages/', label: 'Careers Page' },
      { href: 'https://smoothhiring.com/onboarding/', label: 'Onboarding' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources/job-description-templates', label: 'Job Description Templates' },
      { href: '/resources/offer-letter-templates', label: 'Offer Letter Templates' },
      { href: '/resources/policy-templates', label: 'Policy Templates' },
      { href: '/resources/rejection-letter-templates', label: 'Rejection Letter Templates' },
      { href: '/resources/interview-letter-templates', label: 'Interview Letter Templates' },
      { href: '/resources/ai-job-description', label: 'AI Job Description Generator' },
    ],
  },
] as const;

const socialLinks = [
  { href: 'https://www.linkedin.com/company/smoothhiring', icon: <LinkedInIcon fontSize="small" />, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/smoothhiring', icon: <FacebookIcon fontSize="small" />, label: 'Facebook' },
  { href: 'https://twitter.com/smoothhiring', icon: <XIcon fontSize="small" />, label: 'Twitter' },
  { href: 'https://www.instagram.com/smoothhiring', icon: <InstagramIcon fontSize="small" />, label: 'Instagram' },
  { href: 'https://www.indeed.com/cmp/SmoothHiring', icon: <WorkIcon fontSize="small" />, label: 'Indeed' },
];

export const ResourceFooter = () => {
  return (
    <FooterRoot>
      <ShContainer maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Stack gap={1.5}>
              <LogoImg
                src="https://smoothhiring.com/wp-content/uploads/2024/07/SH_AI_Logo.png"
                alt="SmoothHiring"
              />
              <Typography variant="body2" color="text.secondary">
                SmoothHiring is an all-in-one hiring platform for small and mid-size businesses, built on
                predictive analytics to help you hire with confidence.
              </Typography>
            </Stack>
          </Grid>
          {footerSections.map((section) => (
            <Grid key={section.title} item xs={6} sm={3} md={2.25}>
              <FooterLinkGroup>
                <FooterHeading variant="body2">{section.title}</FooterHeading>
                {section.links.map((link) => (
                  <ResourceMuiLink key={link.href} href={link.href} variant="body2" color="text.secondary">
                    {link.label}
                  </ResourceMuiLink>
                ))}
              </FooterLinkGroup>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mt: 4, mb: 0 }} />

        <BottomBar>
          <ContactRow>
            <Typography variant="caption" color="text.secondary">1 877 789 8767</Typography>
            <Typography variant="caption" color="text.secondary">help@smoothhiring.com</Typography>
            <Typography variant="caption" color="text.secondary">Suite #106, 6797 N High Street, Worthington, OH 43085</Typography>
          </ContactRow>
          <SocialRow>
            {socialLinks.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <SocialButton size="small" aria-label={s.label}>
                  {s.icon}
                </SocialButton>
              </a>
            ))}
          </SocialRow>
        </BottomBar>
        <Typography variant="caption" color="text.secondary" display="block" textAlign="center" pb={2}>
          © {new Date().getFullYear()} SmoothHiring. All rights reserved.
        </Typography>
      </ShContainer>
    </FooterRoot>
  );
};

export default ResourceFooter;
