import { Box, LinkProps, Link, ListItem, ListItemText, Stack, TextField, Typography, styled } from '@mui/material';
import { Link as href } from 'react-router-dom';

interface ShListItemProps {
  to: string;
  onClick: () => void;
  primary: string;
}

export const ResourceElementsBorderRadius = 20;

export const ShListItem: React.FC<ShListItemProps> = ({ to, onClick, primary }) => (
  <ListItem component={href} to={to} onClick={onClick}>
    <ListItemText primary={primary} />
  </ListItem>
);

export const ResourcesWrapperBox = styled(Box)(({ theme }) => ({
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

export const ResourceTypography = styled(Typography)({
  lineHeight: 1.75,
  textDecoration: 'none',
});

export const ResourceHomeTextField = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    minWidth: '200px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '500px',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '700px',
  },
}));

interface IShMuiLink extends LinkProps {
  noUnderline?: boolean;
}
export const ResourceMuiLink = styled(Link, {
  shouldForwardProp: prop => prop !== 'noUnderline',
})<IShMuiLink>(({ theme, noUnderline }) => ({
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
