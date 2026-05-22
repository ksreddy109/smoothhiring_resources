'use client';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, Stack } from '@mui/material';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

type Props = {
  url: string;
  onCopy: () => void;
};

export function ResourceSocialShareInner({ url, onCopy }: Props) {
  if (!url) return null;
  return (
    <Stack spacing={2} direction="row">
      <FacebookShareButton url={url}>
        <FacebookIcon size={30} round />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={30} round />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={30} round />
      </TwitterShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={30} round />
      </EmailShareButton>
      <IconButton onClick={onCopy}>
        <ContentCopyIcon />
      </IconButton>
    </Stack>
  );
}
