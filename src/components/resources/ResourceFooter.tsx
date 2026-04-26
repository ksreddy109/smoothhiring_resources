'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Grid, Stack, Typography, IconButton, styled } from '@mui/material';
import { PrimaryWordpressThemeColor, ShContainer } from '@/integrations/smooth-hiring-ui';
import { ResourceMuiLink } from './Resources.styled';

const FooterRoot = styled(ShContainer)(({ theme }) => ({
  margin: '0 auto',
}));

const LogoWrap = styled(Box)(({ theme }) => ({
  width: 175,
  height: 50,
  display: 'flex',
  alignItems: 'center',
}));

const LogoImg = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

const FooterLinkGroup = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
}));

const BottomBar = styled(Stack)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: PrimaryWordpressThemeColor,
  padding: theme.spacing(2, 2, 5),
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const SocialRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1),
}));

const SocialAnchor = styled('a')(({ theme }) => ({
  color: theme.palette.common.white,
  display: 'inline-flex',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  padding: 0,
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
      { href: 'https://smoothhiring.com/job-distribution', label: 'Post to Many Job Boards' },
      { href: 'https://smoothhiring.com/predictive-analytics', label: 'Predict Best Employees' },
      { href: 'https://smoothhiring.com/applicant-tracking/', label: 'Applicant Tracking System (ATS)' },
      { href: 'https://smoothhiring.com/careers-pages/', label: 'Careers Page' },
      { href: 'https://smoothhiring.com/onboarding/', label: 'Onboarding' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: 'https://resources.smoothhiring.com/resources/job-description-templates', label: 'Job Description Templates' },
      { href: 'https://resources.smoothhiring.com/resources/ai-interview-kit', label: 'Interview Questions' },
      { href: 'https://resources.smoothhiring.com/resources/offer-letter-templates', label: 'Offer Templates' },
      { href: 'https://resources.smoothhiring.com/resources/ai-job-description', label: 'AI Tools' },
    ],
  },
] as const;

export const ResourceFooter = () => {
  return (
    <FooterRoot maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2.5}>
          <Stack>
            <LogoWrap>
              <LogoImg src='https://smoothhiring.com/wp-content/uploads/2024/07/SH_AI_Logo.png' alt='SmoothHiring' />
            </LogoWrap>
            <Typography variant='body2'>SmoothHiring, built on predictive analytics, is an all-in-one hiring solution for SMBs.</Typography>
          </Stack>
        </Grid>
        {footerSections.map((section) => (
          <Grid key={section.title} item xs={12} sm={3} md={2}>
            <FooterLinkGroup>
              <Typography variant='subtitle1'>{section.title}</Typography>
              {section.links.map((link) => (
                <ResourceMuiLink key={link.href} href={link.href} variant='body2' color='inherit'>
                  {link.label}
                </ResourceMuiLink>
              ))}
            </FooterLinkGroup>
          </Grid>
        ))}

        <Grid item xs={12}>
          <BottomBar>
            <Typography variant='body2'>1 877 789 8767 </Typography>
            <Typography variant='body2'>help@smoothhiring.com</Typography>
            <Typography variant='body2'>Suite #106, 6797 N High Street, Worthington, Ohio-43085</Typography>
            <SocialRow>
              <SocialAnchor href='https://www.linkedin.com/company/smoothhiring' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                <SocialButton>
                  <LinkedInIcon fontSize='small' />
                </SocialButton>
              </SocialAnchor>
              <SocialAnchor href='https://www.facebook.com/smoothhiring' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                <SocialButton>
                  <FacebookIcon fontSize='small' />
                </SocialButton>
              </SocialAnchor>
              <SocialAnchor href='https://twitter.com/smoothhiring' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
                <SocialButton>
                  <XIcon fontSize='small' />
                </SocialButton>
              </SocialAnchor>
              <SocialAnchor href='https://www.instagram.com/smoothhiring' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <SocialButton>
                  <InstagramIcon fontSize='small' />
                </SocialButton>
              </SocialAnchor>
              <SocialAnchor href='https://www.indeed.com/cmp/SmoothHiring' target='_blank' rel='noopener noreferrer' aria-label='Indeed'>
                <SocialButton>
                  <WorkIcon fontSize='small' />
                </SocialButton>
              </SocialAnchor>
            </SocialRow>
          </BottomBar>
        </Grid>
      </Grid>
    </FooterRoot>
  );
};

export default ResourceFooter;
