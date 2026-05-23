import { Link, LinkProps, Stack, TextField, styled } from '@mui/material';

/** Re-export layout primitives — prefer `@/components/resources/layout`. */
export {
  MarketingHero,
  MarketingLinkCard,
  MarketingPage,
  MarketingSection,
  MarketingStatStrip,
  MarketingToolCard,
} from '@/components/resources/layout';

interface IShMuiLink extends LinkProps {
  noUnderline?: boolean;
}

export const ResourceMuiLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'noUnderline',
})<IShMuiLink>(() => ({
  height: '100%',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const ResourceHomeTextField = styled(TextField)(() => ({
  width: '100%',
  maxWidth: 720,
  '& .MuiInputBase-root': {
    minHeight: 44,
  },
}));

export const ResourceTitleStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  position: 'relative',
  '& .back-button': {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translate(0%, -50%)',
  },
}));
