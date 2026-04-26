'use client';

import NearMeIcon from '@mui/icons-material/NearMe';
import { Button, Typography } from '@mui/material';
import { ResourceCTAStack, ShPaper } from '@/integrations/smooth-hiring-ui';
import { SHSignUpLink } from '@/lib/resources-constants';

type ResourceCTAProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export const ResourceCTA = ({
  title = "Ready to post your job to 100's of job boards?",
  subtitle = 'LinkedIn, Talent.com, career page - place your job on multiple platforms for FREE with just one click',
  buttonText = 'Post a Free Job',
}: ResourceCTAProps) => {
  return (
    <ResourceCTAStack>
      <ShPaper variant="outlined">
        <Typography gutterBottom variant="h6" color="text.primary">
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
        <Button href={SHSignUpLink} size="large" color="primary" variant="contained" endIcon={<NearMeIcon />} component="a">
          <Typography>{buttonText}</Typography>
        </Button>
      </ShPaper>
    </ResourceCTAStack>
  );
};
