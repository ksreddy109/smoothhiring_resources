import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { IAppInfoState, IAppTheme, IModuleSwitchState } from "./slices/app/app-model";
import resourcesSlice from "./slices/app/resources-slice";
import { notificationReducer } from "./slices/app/notification-slice";
import breadcrumbSlice from "./slices/app/breadcrumb-slice";

const themeStub = (state: IAppTheme = { curTheme: "light", mode: "light" }): IAppTheme => state;
const appInfoStub = (state: IAppInfoState = { isFaqOpen: false }): IAppInfoState => state;
const moduleSwitchStub = (state: IModuleSwitchState = {} as IModuleSwitchState): IModuleSwitchState => state;

const appReducer = combineReducers({
  theme: themeStub,
  appInfo: appInfoStub,
  moduleSwitch: moduleSwitchStub,
  resources: resourcesSlice.reducer,
  notification: notificationReducer,
  breadcrumb: breadcrumbSlice.reducer,
});

const rootReducer = combineReducers({ app: appReducer });

export type { RootState } from "./state-types";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export { rootReducer };
