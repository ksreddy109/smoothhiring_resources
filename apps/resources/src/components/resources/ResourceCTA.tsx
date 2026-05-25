'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import { ResourceCTAStack } from '@/integrations/smooth-hiring-ui';
import { SHSignUpLink } from '@/lib/resources-constants';
import {
  ResourceCtaButton,
  ResourceCtaCopy,
  ResourceCtaPaper,
  ResourceCtaRow,
  ResourceCtaTitle,
} from './ResourceCTA.styled';

type ResourceCTAProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export const ResourceCTA = ({
  title = 'Ready to hire with less busywork?',
  subtitle =
    'Post to LinkedIn, Indeed, Talent.com, and 100+ more job boards from one place — free to get started.',
  buttonText = 'Post a free job',
}: ResourceCTAProps) => {
  return (
    <ResourceCTAStack>
      <ResourceCtaPaper variant="outlined">
        <ResourceCtaRow
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretch', sm: 'center' }}
          justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
        >
          <ResourceCtaCopy>
            <ResourceCtaTitle variant="h3" component="h2">
              {title}
            </ResourceCtaTitle>
            <Typography variant="body1" color="text.secondary" lineHeight={1.65}>
              {subtitle}
            </Typography>
          </ResourceCtaCopy>
          <ResourceCtaButton
            href={SHSignUpLink}
            size="medium"
            variant="contained"
            disableElevation
            endIcon={<ArrowForwardIcon />}
          >
            {buttonText}
          </ResourceCtaButton>
        </ResourceCtaRow>
      </ResourceCtaPaper>
    </ResourceCTAStack>
  );
};
