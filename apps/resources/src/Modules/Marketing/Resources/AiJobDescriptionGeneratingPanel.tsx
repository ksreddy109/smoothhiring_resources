import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Skeleton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  GradientBorder,
  ResourceAiToolGeneratingStack,
  ResourceAiToolLoadingDotsHost,
  ResourceCardDescription,
  ResourceSectionSubtitle,
  ShChip,
  ShGreen,
  ShLoadingDots,
  ShPaper,
  greenGradient,
} from '@/integrations/smooth-hiring-ui';

const GENERATING_PHRASES = [
  'Crafting a hook candidates actually read…',
  'Structuring responsibilities & requirements…',
  'Tightening bullets for quick scanning…',
  'Polishing tone to stay inclusive & clear…',
  'Adding the finishing professional shine…',
];

type AiJobDescriptionGeneratingPanelProps = {
  role?: string;
};

export const AiJobDescriptionGeneratingPanel = ({ role }: AiJobDescriptionGeneratingPanelProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhraseIndex(i => (i + 1) % GENERATING_PHRASES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  const roleLabel = role?.trim();

  return (
    <ResourceAiToolGeneratingStack>
      <Stack spacing={1.5} alignItems='center' maxWidth={520}>
        <ShChip
          icon={<AutoAwesomeIcon sx={{ color: `${ShGreen} !important` }} />}
          label='AI is writing'
          color='primary'
          variant='outlined'
          sx={{ fontWeight: 600 }}
        />
        <Typography variant='subtitle1' fontWeight={700}>
          Writing your job description
        </Typography>
        <ResourceSectionSubtitle variant='body2' key={phraseIndex}>
          {GENERATING_PHRASES[phraseIndex]}
        </ResourceSectionSubtitle>
        {roleLabel ? (
          <ShChip label={roleLabel} size='small' variant='outlined' />
        ) : null}
        <ResourceAiToolLoadingDotsHost>
          <ShLoadingDots variant='positive' />
        </ResourceAiToolLoadingDotsHost>
      </Stack>

      <GradientBorder
        gradient={greenGradient}
        animated
        hoverable={false}
        borderRadius={12}
        borderWidth={2}
        width='100%'
        maxWidth={720}
      >
        <ShPaper variant='outlined' sx={{ p: { xs: 2, sm: 2.5 } }}>
          <Stack spacing={1.5}>
            <Skeleton variant='text' width='42%' height={32} animation='wave' />
            <Skeleton variant='text' width='88%' animation='wave' />
            <Skeleton variant='text' width='76%' animation='wave' />
            <Skeleton variant='text' width='36%' height={28} sx={{ mt: 1 }} animation='wave' />
            <Skeleton variant='rounded' height={12} width='100%' animation='wave' />
            <Skeleton variant='rounded' height={12} width='94%' animation='wave' />
            <Skeleton variant='rounded' height={12} width='90%' animation='wave' />
            <Skeleton variant='rounded' height={12} width='72%' animation='wave' />
          </Stack>
        </ShPaper>
      </GradientBorder>

      <ResourceCardDescription variant='caption' sx={{ maxWidth: 420 }}>
        Usually ready in a few seconds — you can edit everything before copying or posting.
      </ResourceCardDescription>
    </ResourceAiToolGeneratingStack>
  );
};

export default AiJobDescriptionGeneratingPanel;
