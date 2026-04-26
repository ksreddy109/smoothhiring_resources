import { Snackbar, Typography, styled } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useNotification } from 'Modules/Core/Notification/useNotification';
import { useAppSelector } from 'helpers/hooks';
import { ShAlert } from '@smoothhiring/smooth-ui';
import { ShGreen, WhiteColor } from '@smoothhiring/smooth-ui';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const StyledNotificationAlert = styled(ShAlert)(({ theme, severity }) => ({
  borderRadius: '15px',
  ...(severity === 'success' && {
    backgroundColor: ShGreen,
    color: WhiteColor,
    '& .MuiAlert-icon': {
      color: WhiteColor,
    },
    '& .MuiAlert-action': {
      color: WhiteColor,
    },
    '& .MuiIconButton-root': {
      color: WhiteColor,
    },
  }),
}));

export const Notification = () => {
  const notification = useAppSelector(state => state.app.notification);
  const { clearNotification } = useNotification();

  const isPersistent = notification?.persistent === true;
  const timeout = isPersistent ? null : (notification?.timeout ?? 5000);

  return (
    <Snackbar
      open={notification?.open}
      autoHideDuration={timeout}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={(e, reason) => {
        if (reason === 'clickaway' && isPersistent) {
          return;
        }
        clearNotification();
        e?.stopPropagation();
      }}
    >
      <StyledNotificationAlert
        variant='filled'
        onClose={(e: SyntheticEvent) => {
          clearNotification();
          e?.stopPropagation();
        }}
        severity={notification.type}
        icon={notification.type === 'success' ? <TaskAltIcon htmlColor={WhiteColor} /> : undefined}
      >
        <Typography variant='body1' fontWeight={600}>
          {notification?.message}
        </Typography>
      </StyledNotificationAlert>
    </Snackbar>
  );
};
