import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Paper, ToggleButton, ToggleButtonGroup, InputBase, Button, Stack, IconButton, Chip, ButtonProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xsmall: true;
  }
}

export const StyledToolbarPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const StyledSearchPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  transition: 'all 0.2s ease-in-out',
  paddingLeft: theme.spacing(1),
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  minWidth: '300px',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 2),
    width: '100%',
  },
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root': {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1, 2),
    textTransform: 'none',
  },
  '& .MuiToggleButtonGroup-grouped': {
    border: `1px solid ${theme.palette.divider} !important`,
  },
  '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
    marginLeft: theme.spacing(0.5),
    borderLeft: `1px solid ${theme.palette.divider} !important`,
  },
  '& .MuiToggleButtonGroup-grouped:not(:last-of-type)': {
    borderRight: `1px solid ${theme.palette.divider} !important`,
  },
}));

const StyledActionButtonBase = styled(Button, {
  shouldForwardProp: prop =>
    prop !== 'add' &&
    prop !== 'cancel' &&
    prop !== 'edit' &&
    prop !== 'delete' &&
    prop !== 'save' &&
    prop !== 'close' &&
    prop !== 'back' &&
    prop !== 'continue' &&
    prop !== 'search' &&
    prop !== 'filter' &&
    prop !== 'download' &&
    prop !== 'upload' &&
    prop !== 'refresh' &&
    prop !== 'settings' &&
    prop !== 'confirm' &&
    prop !== 'postJob' &&
    prop !== 'icon' &&
    prop !== 'borderRadius' &&
    prop !== 'textColor' &&
    prop !== 'minWidth' &&
    prop !== 'marginLeft' &&
    prop !== 'extraLarge',
})<{
  component?: React.ElementType;
  to?: string;
  add?: boolean;
  cancel?: boolean;
  edit?: boolean;
  delete?: boolean;
  save?: boolean;
  close?: boolean;
  back?: boolean;
  continue?: boolean;
  search?: boolean;
  filter?: boolean;
  download?: boolean;
  upload?: boolean;
  refresh?: boolean;
  settings?: boolean;
  confirm?: boolean;
  postJob?: boolean;
  borderRadius?: number;
  textColor?: string;
  minWidth?: string | number;
  marginLeft?: string;
  extraLarge?: boolean;
}>(({ theme, postJob, add, cancel, edit, delete: deleteProp, save, close, search, filter, download, upload, refresh, settings, confirm, size, borderRadius: br, textColor, minWidth, marginLeft, extraLarge }) => {
  return {
    borderRadius: br !== undefined ? br : theme.shape.borderRadius + 2,
    ...(textColor !== undefined ? { color: textColor } : {}),
    ...(minWidth !== undefined ? { minWidth } : {}),
    ...(marginLeft !== undefined ? { marginLeft } : {}),
    ...(extraLarge
      ? {
          fontSize: theme.typography.button.fontSize,
          padding: '10px 30px',
        }
      : {}),
    fontSize: theme.typography.body2.fontSize,
    padding: size === 'small' ? theme.spacing(0.5, 1) : size === 'xsmall' ? theme.spacing(0.25, 0.75) : theme.spacing(1, 1.5),
    textTransform: 'none',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    border: `1.5px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      padding: theme.spacing(0.375, 1),
      minHeight: 30,
    },
    '&:hover': {
      borderColor: theme.palette.primary.main,
      backgroundColor: alpha(theme.palette.primary.main, 0.05),
    },
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
      borderColor: theme.palette.action.disabled,
      cursor: 'not-allowed',
      '&:hover': {
        backgroundColor: theme.palette.action.disabledBackground,
        borderColor: theme.palette.action.disabled,
      },
    },
    // Primary variants
    '&.MuiButton-containedPrimary': {
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: '#fff',
        border: 'none',
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
        border: 'none',
      },
    },
    '&.MuiButton-outlinedPrimary': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      borderWidth: '1.5px',
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.05),
        borderColor: theme.palette.primary.dark,
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabled,
      },
    },
    // Secondary variants
    '&.MuiButton-containedSecondary': {
      color: '#fff',
      backgroundColor: theme.palette.secondary.main,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
        border: 'none',
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
        border: 'none',
      },
    },
    '&.MuiButton-outlinedSecondary': {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      borderWidth: '1.5px',
      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, 0.05),
        borderColor: theme.palette.secondary.dark,
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabled,
      },
    },
    // Success variants
    '&.MuiButton-containedSuccess': {
      color: '#fff',
      backgroundColor: theme.palette.success.main,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.palette.success.dark,
        color: '#fff',
        border: 'none',
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
        border: 'none',
      },
    },
    '&.MuiButton-outlinedSuccess': {
      color: theme.palette.success.main,
      borderColor: theme.palette.success.main,
      borderWidth: '1.5px',
      '&:hover': {
        backgroundColor: alpha(theme.palette.success.main, 0.05),
        borderColor: theme.palette.success.dark,
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabled,
      },
    },
    // Error variants
    '&.MuiButton-containedError': {
      color: '#fff',
      backgroundColor: theme.palette.error.main,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
        color: '#fff',
        border: 'none',
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
        border: 'none',
      },
    },
    '&.MuiButton-outlinedError': {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
      borderWidth: '1.5px',
      '&:hover': {
        backgroundColor: alpha(theme.palette.error.main, 0.05),
        borderColor: theme.palette.error.dark,
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabled,
      },
    },
    // Warning variants
    '&.MuiButton-containedWarning': {
      color: '#fff',
      backgroundColor: theme.palette.warning.main,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.palette.warning.dark,
        color: '#fff',
        border: 'none',
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
        border: 'none',
      },
    },
    '&.MuiButton-outlinedWarning': {
      color: theme.palette.warning.main,
      borderColor: theme.palette.warning.main,
      borderWidth: '1.5px',
      '&:hover': {
        backgroundColor: alpha(theme.palette.warning.main, 0.05),
        borderColor: theme.palette.warning.dark,
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabled,
      },
    },
    // Info variants
    '&.MuiButton-containedInfo': {
      color: '#fff',
      backgroundColor: theme.palette.info.main,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.palette.info.dark,
        color: '#fff',
        border: 'none',
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
        border: 'none',
      },
    },
    '&.MuiButton-outlinedInfo': {
      color: theme.palette.info.main,
      borderColor: theme.palette.info.main,
      borderWidth: '1.5px',
      '&:hover': {
        backgroundColor: alpha(theme.palette.info.main, 0.05),
        borderColor: theme.palette.info.dark,
      },
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabled,
      },
    },
  };
});

type ActionIconProps = {
  add?: boolean;
  cancel?: boolean;
  edit?: boolean;
  delete?: boolean;
  save?: boolean;
  close?: boolean;
  back?: boolean;
  continue?: boolean;
  search?: boolean;
  filter?: boolean;
  download?: boolean;
  upload?: boolean;
  refresh?: boolean;
  settings?: boolean;
  table?: boolean;
  confirm?: boolean;
};

const getActionIcon = (props: ActionIconProps): React.ReactNode => {
  if (props.back) return React.createElement(ArrowBackIcon, { fontSize: 'small' });
  if (props.table) return React.createElement(BackupTableOutlinedIcon, { fontSize: 'small' });
  if (props.continue) return React.createElement(ArrowForwardIcon, { fontSize: 'small' });
  if (props.add) return React.createElement(AddIcon, { fontSize: 'small' });
  if (props.cancel) return React.createElement(CancelIcon, { fontSize: 'small' });
  if (props.edit) return React.createElement(EditIcon, { fontSize: 'small' });
  if (props.delete) return React.createElement(DeleteIcon, { fontSize: 'small' });
  if (props.save) return React.createElement(SaveIcon, { fontSize: 'small' });
  if (props.close) return React.createElement(CloseIcon, { fontSize: 'small' });
  if (props.search) return React.createElement(SearchIcon, { fontSize: 'small' });
  if (props.filter) return React.createElement(FilterListIcon, { fontSize: 'small' });
  if (props.download) return React.createElement(DownloadIcon, { fontSize: 'small' });
  if (props.upload) return React.createElement(UploadIcon, { fontSize: 'small' });
  if (props.refresh) return React.createElement(RefreshIcon, { fontSize: 'small' });
  if (props.settings) return React.createElement(SettingsIcon, { fontSize: 'small' });
  if (props.confirm) return React.createElement(CheckCircleIcon, { fontSize: 'small' });
  return undefined;
};

export type StyledActionButtonProps = ButtonProps &
  ActionIconProps & {
    to?: string;
    component?: React.ElementType;
    postJob?: boolean;
    icon?: React.ReactNode;
    borderRadius?: number;
    textColor?: string;
    minWidth?: string | number;
    marginLeft?: string;
    extraLarge?: boolean;
    target?: string;
    rel?: string;
  };

export const StyledActionButton = React.forwardRef<HTMLButtonElement, StyledActionButtonProps>(function StyledActionButton(props, ref) {
  const { startIcon, icon, table, back, continue: continueProp, add, cancel, edit, delete: deleteProp, save, close, search, filter, download, upload, refresh, settings, confirm, size, postJob, ...rest } = props as any;
  let resolvedIcon = startIcon ?? icon ?? getActionIcon({ table, back, continue: continueProp, add, cancel, edit, delete: deleteProp, save, close, search, filter, download, upload, refresh, settings, confirm });
  return React.createElement(StyledActionButtonBase as any, { ref, startIcon: resolvedIcon, add, cancel, edit, delete: deleteProp, save, close, back, continue: continueProp, search, filter, download, upload, refresh, settings, confirm, size, postJob, ...rest });
});

export const StyledFilterChipsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1),
  backgroundColor: 'transparent',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

export const StyledToolsStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const StyledStageButton = styled(ToggleButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  padding: theme.spacing(0.5, 1.25),
  minHeight: 30,
  fontSize: '0.8rem',
  lineHeight: 1.2,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 20,
  textTransform: 'none',
  transition: 'background-color .2s ease, border-color .2s ease, box-shadow .2s ease, transform .05s ease',
  '&.MuiToggleButton-root': {
    border: `1px solid ${theme.palette.divider}`,
  },
  '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  '&.MuiToggleButtonGroup-grouped.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected': {
    borderLeft: `1px solid ${theme.palette.primary.main}`,
  },
  '&.Mui-selected': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    border: `1px solid ${theme.palette.primary.main}`,
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.Mui-focusVisible': {
    boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
  },
}));

export const StyledSortButton = styled(StyledActionButton)(({ theme }) => ({
  minWidth: '120px',
  textTransform: 'none',
}));

export const StyledBetaChip = styled(Chip)(({ theme }) => ({
  background: theme.palette.warning.main,
  color: 'white',
}));

export const StyledFilterChip = styled(Chip)(({ theme }) => ({
  borderRadius: '25px',
  borderColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const StyledAnalysisReadyButton = styled(StyledActionButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1, 2),
  textTransform: 'none',
  fontWeight: 500,
  transition: 'all 0.2s ease-in-out',
  border: `1px solid ${theme.palette.divider}`,
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(45deg, ${theme.palette.background.paper}, ${alpha(theme.palette.primary.main, 0.05)})`,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.primary.main, 0.3)}, transparent)`,
    animation: 'shimmer 2s infinite',
    zIndex: 0,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderRadius: theme.shape.borderRadius * 2 + 2,
    zIndex: -1,
    animation: 'borderRotate 3s linear infinite',
  },

  '& .MuiButton-startIcon': {
    zIndex: 1,
    position: 'relative',
  },

  '& .MuiStack-root': {
    zIndex: 1,
    position: 'relative',
  },

  '@keyframes shimmer': {
    '0%': {
      left: '-100%',
    },
    '100%': {
      left: '100%',
    },
  },

  '@keyframes borderRotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));
