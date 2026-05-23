'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import XIcon from '@mui/icons-material/X';
import { Box, Divider, Grid, IconButton, Stack, Typography, styled } from '@mui/material';
import { getMarketingSiteUrl } from '@/lib/site';
import { ResourceMuiLink } from './Resources.styled';

const FooterRoot = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FooterInner = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const LogoImg = styled('img')({
  height: 32,
  objectFit: 'contain',
});

const FooterLinkGroup = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(0.75),
  alignItems: 'center',
  textAlign: 'center',
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.primary,
  textAlign: 'center',
  width: '100%',
}));

const FooterBlurb = styled(Typography)({
  textAlign: 'center',
});

const FooterDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const BottomBar = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(2),
}));

const ContactRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
}));

const SocialRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(0.5),
  justifyContent: 'center',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.5),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  display: 'block',
  textAlign: 'center',
  paddingBottom: theme.spacing(2),
}));

function marketingPath(path: string): string {
  const base = getMarketingSiteUrl();
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

const footerSections = [
  {
    title: 'Company',
    links: [
      { href: marketingPath('/'), label: 'Home' },
      { href: marketingPath('/about-us'), label: 'About Us' },
      { href: marketingPath('/testimonials'), label: 'Testimonials' },
      { href: marketingPath('/blog'), label: 'Blog' },
      { href: marketingPath('/contact-us'), label: 'Contact Us' },
    ],
  },
  {
    title: 'Product',
    links: [
      { href: marketingPath('/integrations'), label: 'Integrations' },
      { href: marketingPath('/pricing'), label: 'Pricing' },
      { href: marketingPath('/frequently-asked-questions'), label: 'FAQs' },
      { href: marketingPath('/help-center'), label: 'Help Center' },
      { href: 'https://calendly.com/admin-1ue9/30min', label: 'Request a Demo' },
    ],
  },
  {
    title: 'Features',
    links: [
      { href: marketingPath('/all-features'), label: 'All Features' },
      { href: marketingPath('/job-distribution-software'), label: 'Job Board Distribution' },
      { href: marketingPath('/predictive-hiring'), label: 'Predictive Analytics' },
      { href: marketingPath('/applicant-tracking-system'), label: 'Applicant Tracking (ATS)' },
      { href: marketingPath('/careers-pages'), label: 'Careers Page' },
      { href: marketingPath('/onboarding'), label: 'Onboarding' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources/job-description-templates/', label: 'Job Description Templates' },
      { href: '/resources/offer-letter-templates/', label: 'Offer Letter Templates' },
      { href: '/resources/policy-templates/', label: 'Policy Templates' },
      { href: '/resources/rejection-letter-templates/', label: 'Rejection Letter Templates' },
      { href: '/resources/interview-letter-templates/', label: 'Interview Letter Templates' },
      { href: '/resources/ai-job-description/', label: 'AI Job Description Generator' },
    ],
  },
] as const;

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/smoothhiring',
    icon: <LinkedInIcon fontSize="small" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/smoothhiring',
    icon: <FacebookIcon fontSize="small" />,
    label: 'Facebook',
  },
  { href: 'https://twitter.com/smoothhiring', icon: <XIcon fontSize="small" />, label: 'Twitter' },
  {
    href: 'https://www.instagram.com/smoothhiring',
    icon: <InstagramIcon fontSize="small" />,
    label: 'Instagram',
  },
  {
    href: 'https://www.indeed.com/cmp/SmoothHiring',
    icon: <WorkIcon fontSize="small" />,
    label: 'Indeed',
  },
];

export function ResourceFooter() {
  return (
    <FooterRoot component="footer">
      <FooterInner>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} lg={3}>
            <Stack gap={1.5} alignItems="center">
              <ResourceMuiLink href={marketingPath('/')} noUnderline>
                <LogoImg src="/images/logo.svg" alt="SmoothHiring" />
              </ResourceMuiLink>
              <FooterBlurb variant="body2" color="text.secondary">
                SmoothHiring is an all-in-one hiring platform for small and mid-size businesses,
                built on predictive analytics to help you hire with confidence.
              </FooterBlurb>
            </Stack>
          </Grid>
          {footerSections.map((section) => (
            <Grid key={section.title} item xs={6} sm={4} md={2}>
              <FooterLinkGroup>
                <FooterHeading variant="body2">{section.title}</FooterHeading>
                {section.links.map((link) => (
                  <ResourceMuiLink
                    key={link.href}
                    href={link.href}
                    variant="body2"
                    color="text.secondary"
                  >
                    {link.label}
                  </ResourceMuiLink>
                ))}
              </FooterLinkGroup>
            </Grid>
          ))}
        </Grid>

        <FooterDivider />

        <BottomBar>
          <ContactRow>
            <Typography variant="caption" color="text.secondary">
              1 877 789 8767
            </Typography>
            <Typography variant="caption" color="text.secondary">
              help@smoothhiring.com
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Suite #106, 6797 N High Street, Worthington, OH 43085
            </Typography>
          </ContactRow>
          <SocialRow>
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <SocialButton size="small" aria-label={s.label}>
                  {s.icon}
                </SocialButton>
              </a>
            ))}
          </SocialRow>
        </BottomBar>
        <Copyright variant="caption" color="text.secondary">
          © {new Date().getFullYear()} SmoothHiring. All rights reserved.
        </Copyright>
      </FooterInner>
    </FooterRoot>
  );
}
