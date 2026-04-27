import { TAppContext } from 'store/slices/auth-v2/auth-v2-model';

/**
 * Stores access token in local storage.
 * */
export const setLocalAccessToken = (accessToken: string) => {
  window.localStorage.setItem('accessToken', accessToken);
};

/**
 * Retrieves access token from local storage.
 * */
export const getLocalAccessToken = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  return accessToken;
};

export const clearTokensFromStorage = () => {
  window.localStorage.removeItem('accessToken');
};

/**
 * Stores current app context in local storage.
 * appContext is used to handle the app flow based on user type.
 * */
export const setAppContextInLocalStorage = (appContext: TAppContext) => {
  window.localStorage.setItem('appContext', appContext);
};

/**
 * Stores current app context in local storage.
 * appContext is used to handle the app flow based on user type.
 * */
export const getAppContextInLocalStorage = (): TAppContext => {
  const appContext = window.localStorage.getItem('appContext') as TAppContext;
  return appContext;
};
