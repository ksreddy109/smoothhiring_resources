'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Grid, Stack, Typography, IconButton } from '@mui/material';
import { PrimaryWordpressThemeColor, ShContainer } from '@/integrations/smooth-hiring-ui';
import { ResourceMuiLink, ResourceWrapperStyle } from './Resources.styled';

export const ResourceFooter = () => {
  return (
    <ShContainer margin='auto' maxWidth='xl'>
      <Grid container spacing={3}>
        {/* Logo and Description */}
        <Grid item xs={12} md={2.5}>
          <Stack spacing={0.5}>
            <Box width='175px' height='50px' display='flex' alignItems='center'>
              <img
                src='https://smoothhiring.com/wp-content/uploads/2024/07/SH_AI_Logo.png'
                alt='SmoothHiring'
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </Box>
            <Typography variant='body2'>SmoothHiring, built on predictive analytics, is an all-in-one hiring solution for SMBs.</Typography>
          </Stack>
        </Grid>

        {/* Company Links */}
        <Grid item xs={12} sm={3} md={2}>
          <Stack spacing={1}>
            <Typography variant='subtitle1'>Company</Typography>
            <ResourceMuiLink href='https://smoothhiring.com' variant='body2' color='inherit'>
              Home
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/About-Us' variant='body2' color='inherit'>
              About Us
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/testimonials' variant='body2' color='inherit'>
              Testimonials
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/blog' variant='body2' color='inherit'>
              Blog
            </ResourceMuiLink>
            <ResourceMuiLink href='https://help.smoothhiring.com/help' variant='body2' color='inherit'>
              Contact Us
            </ResourceMuiLink>
          </Stack>
        </Grid>

        {/* Product Links */}
        <Grid item xs={12} sm={3} md={2}>
          <Stack spacing={1}>
            <Typography variant='subtitle1'>Product</Typography>
            <ResourceMuiLink href='https://smoothhiring.com/integrations' variant='body2' color='inherit'>
              Integrations
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/pricing' variant='body2' color='inherit'>
              Pricing
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/frequently-asked-questions/' variant='body2' color='inherit'>
              FAQs
            </ResourceMuiLink>
            <ResourceMuiLink href='https://help.smoothhiring.com/help' variant='body2' color='inherit'>
              Help Center
            </ResourceMuiLink>
            <ResourceMuiLink href='https://calendly.com/admin-1ue9/30min' variant='body2' color='inherit'>
              Request a Demo
            </ResourceMuiLink>
          </Stack>
        </Grid>

        {/* Features Links */}
        <Grid item xs={12} sm={3} md={2}>
          <Stack spacing={1}>
            <Typography variant='subtitle1'>Features</Typography>
            <ResourceMuiLink href='https://smoothhiring.com/all-features' variant='body2' color='inherit'>
              All Features
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/job-distribution' variant='body2' color='inherit'>
              Post to Many Job Boards
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/predictive-analytics' variant='body2' color='inherit'>
              Predict Best Employees
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/applicant-tracking/' variant='body2' color='inherit'>
              Applicant Tracking System (ATS)
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/careers-pages/' variant='body2' color='inherit'>
              Careers Page
            </ResourceMuiLink>
            <ResourceMuiLink href='https://smoothhiring.com/onboarding/' variant='body2' color='inherit'>
              Onboarding
            </ResourceMuiLink>
          </Stack>
        </Grid>

        {/* Resources Links TBD/FIXED*/}
        <Grid item xs={12} sm={3} md={2}>
          <Stack spacing={1}>
            <Typography variant='subtitle1'>Resources</Typography>
            <ResourceMuiLink href='https://resources.smoothhiring.com/resources/job-description-templates' variant='body2' color='inherit'>
              Job Description Templates
            </ResourceMuiLink>
            <ResourceMuiLink href='https://resources.smoothhiring.com/resources/ai-interview-kit' variant='body2' color='inherit'>
              Interview Questions
            </ResourceMuiLink>
            <ResourceMuiLink href='https://resources.smoothhiring.com/resources/offer-letter-templates' variant='body2' color='inherit'>
              Offer Templates
            </ResourceMuiLink>
            <ResourceMuiLink href='https://resources.smoothhiring.com/resources/ai-job-description' variant='body2' color='inherit'>
              AI Tools
            </ResourceMuiLink>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <ResourceWrapperStyle color='white' bgcolor={PrimaryWordpressThemeColor} direction={{ sm: 'column', md: 'row' }} spacing={1} justifyContent='center' alignItems={{ sm: 'flex-start', md: 'center' }} paddingBottom={5}>
            <Typography variant='body2'>1 877 789 8767 </Typography>
            <Typography variant='body2'>help@smoothhiring.com</Typography>
            <Typography variant='body2'>Suite #106, 6797 N High Street, Worthington, Ohio-43085</Typography>
            <Stack direction='row' spacing={1}>
              <IconButton href='https://www.linkedin.com/company/smoothhiring' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' style={{ color: 'white', padding: 0 }}>
                <LinkedInIcon fontSize='small' />
              </IconButton>
              <IconButton href='https://www.facebook.com/smoothhiring' target='_blank' rel='noopener noreferrer' aria-label='Facebook' style={{ color: 'white', padding: 0 }}>
                <FacebookIcon fontSize='small' />
              </IconButton>
              <IconButton href='https://twitter.com/smoothhiring' target='_blank' rel='noopener noreferrer' aria-label='Twitter' style={{ color: 'white', padding: 0 }}>
                <XIcon fontSize='small' />
              </IconButton>
              <IconButton href='https://www.instagram.com/smoothhiring' target='_blank' rel='noopener noreferrer' aria-label='Instagram' style={{ color: 'white', padding: 0 }}>
                <InstagramIcon fontSize='small' />
              </IconButton>
              <IconButton href='https://www.indeed.com/cmp/SmoothHiring' target='_blank' rel='noopener noreferrer' aria-label='Indeed' style={{ color: 'white', padding: 0 }}>
                <WorkIcon fontSize='small' />
              </IconButton>
            </Stack>
          </ResourceWrapperStyle>
        </Grid>
      </Grid>
    </ShContainer>
  );
};

export default ResourceFooter;
