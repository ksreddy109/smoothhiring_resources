import type {
  IBreadcrumbState,
  IAppInfoState,
  IAppTheme,
  IModuleSwitchState,
  INotificationSlice,
  IResourcesState,
} from "./slices/app/app-model";

export type AppStateShape = {
  resources: IResourcesState;
  notification: INotificationSlice;
  theme: IAppTheme;
  appInfo: IAppInfoState;
  moduleSwitch: IModuleSwitchState;
  breadcrumb: IBreadcrumbState;
};

export type RootState = { app: AppStateShape };
