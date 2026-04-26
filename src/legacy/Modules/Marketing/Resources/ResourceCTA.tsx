import NearMeIcon from '@mui/icons-material/NearMe';
import { Typography } from '@mui/material';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { ResourceCTAStack } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { SHSignUpLink } from 'shared/constants';

interface ResourceCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const ResourceCTA = ({ title = "Ready to post your job to 100's of job boards?", subtitle = 'LinkedIn, Talent.com, career page - place your job on multiple platforms for FREE with just one click', buttonText = 'Post a Free Job' }: ResourceCTAProps) => {
  return (
    <ResourceCTAStack>
      <ShPaper variant='outlined'>
        <Typography gutterBottom variant='h6' color='text.primary'>
          {title}
        </Typography>
        <Typography gutterBottom variant='subtitle1' color='text.secondary'>
          {subtitle}
        </Typography>
        <StyledActionButton href={SHSignUpLink} size='large' color='primary' variant='contained' endIcon={<NearMeIcon />}>
          <Typography>{buttonText}</Typography>
        </StyledActionButton>
      </ShPaper>
    </ResourceCTAStack>
  );
};
