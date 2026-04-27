import { Box, LinkProps, Link, Stack, TextField, styled } from '@mui/material';

export const ResourceElementsBorderRadius = 12;

export const ResourcesWrapperBox = styled(Box)(() => ({
  flex: 1,
  height: '100vh',
  overflow: 'auto',
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

export const ResourceHomeTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: 720,
  '& .MuiInputBase-root': {
    minHeight: 44,
  },
}));

interface IShMuiLink extends LinkProps {
  noUnderline?: boolean;
}
export const ResourceMuiLink = styled(Link, {
  shouldForwardProp: prop => prop !== 'noUnderline',
})<IShMuiLink>(() => ({
  height: '100%',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const ResourceWrapperStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.75),
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
}));

// ─── Template page hero ────────────────────────────────────────────────────────

export const TemplateHeroBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(155deg, #eef4ff 0%, #f3fdf0 100%)',
  borderRadius: 16,
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(3),
}));

export const TemplateHeroInner = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(5, 4),
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3.5, 2.5),
  },
}));

export const TemplateHeroEyebrow = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  backgroundColor: 'rgba(65, 126, 227, 0.08)',
  color: theme.palette.primary.main,
  borderRadius: 100,
  padding: theme.spacing(0.35, 1.25),
  fontSize: '0.6875rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
}));

// ─── Template card with hover ─────────────────────────────────────────────────

export const TemplateCardHover = styled(Box)(({ theme }) => ({
  height: '100%',
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#fff',
  cursor: 'pointer',
  transition: 'box-shadow 0.18s ease, transform 0.18s ease, border-color 0.18s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: theme.palette.primary.light,
    boxShadow: '0 4px 16px rgba(65,126,227,0.1)',
  },
}));
