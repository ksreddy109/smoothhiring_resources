import { createSlice } from '@reduxjs/toolkit';
import { INotificationSlice } from './app-model';

export const notificationInitialState: INotificationSlice = {
  open: false,
  type: 'info',
  message: '',
  timeout: 5000,
  persistent: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificationInitialState,
  reducers: {
    addNotification: (_state, action) => ({
      ...notificationInitialState,
      ...action.payload,
      open: true,
    }),
    clearNotification: state => ({ ...state, open: false }),
  },
});

export const notificationActions = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
export default notificationSlice;
