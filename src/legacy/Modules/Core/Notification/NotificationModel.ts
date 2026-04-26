export type TNotification = 'error' | 'warning' | 'info' | 'success';

export interface INotification {
  open: boolean;
  type: TNotification;
  message: string;
  timeout?: number | null;
  persistent?: boolean;
}
