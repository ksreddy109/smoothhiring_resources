'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Stack, Typography } from '@mui/material';
import { ResourceCTAStack, ShPaper } from '@/integrations/smooth-hiring-ui';
import { SHSignUpLink } from '@/lib/resources-constants';

type ResourceCTAProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export const ResourceCTA = ({
  title = 'Ready to put these resources to work?',
  subtitle = 'Post your job to LinkedIn, Indeed, Talent.com, and 100+ more boards — all from one place, for free.',
  buttonText = 'Post a Free Job',
}: ResourceCTAProps) => {
  return (
    <ResourceCTAStack>
      <ShPaper variant='outlined'>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent='space-between'
          gap={2}
        >
          <Stack gap={0.5}>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {subtitle}
            </Typography>
          </Stack>
          <Button
            href={SHSignUpLink}
            component='a'
            variant='contained'
            color='primary'
            size='medium'
            endIcon={<ArrowForwardIcon />}
            sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            {buttonText}
          </Button>
        </Stack>
      </ShPaper>
    </ResourceCTAStack>
  );
};
