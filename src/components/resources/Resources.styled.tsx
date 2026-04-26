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
