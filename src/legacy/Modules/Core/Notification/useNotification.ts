import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { notificationActions } from 'store/slices/app/notification-slice';
import { INotification } from './NotificationModel';

export const useNotification = () => {
  const dispatch = useDispatch();

  const displayNotification = useCallback(
    (notification: INotification) => {
      dispatch(notificationActions.addNotification(notification));
    },
    [dispatch]
  );

  const clearNotification = useCallback(() => {
    dispatch(notificationActions.clearNotification());
  }, [dispatch]);

  return { displayNotification, clearNotification };
};
