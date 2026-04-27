import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Stack, Typography } from '@mui/material';
import { ResourceCTAStack, ShPaper } from '@smoothhiring/smooth-ui';
import { SHSignUpLink } from 'shared/constants';

interface ResourceCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const ResourceCTA = ({
  title = 'Ready to put these resources to work?',
  subtitle = 'Post to LinkedIn, Indeed, Talent.com, and 100+ boards — one click, always free.',
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
