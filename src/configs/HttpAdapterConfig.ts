import axios, { AxiosInstance } from 'axios';
import { REACT_APP_BASE_URL, REACT_APP_FEED_SERVER_URL } from 'configs/EnvConfig';
import { clearTokensFromStorage, getLocalAccessToken } from 'helpers/TokenHelper';
import { sessionExpirySubject } from 'helpers/rxjsHelpers';

const httpAdapter = axios;
const feedServerAdapter = axios;
const httpAdapterInstance: AxiosInstance = httpAdapter.create({
  baseURL: `${REACT_APP_BASE_URL}api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const feedServer = feedServerAdapter.create({
  baseURL: REACT_APP_FEED_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpAdapterInstance.interceptors.request.use(
  async config => {
    try {
      const authToken = getLocalAccessToken();
      if (authToken && config.headers) {
        config.headers['Authorization'] = authToken;
      }
      // Let the browser set Content-Type with boundary for FormData (e.g. resume upload)
      if (config.data instanceof FormData && config.headers) {
        delete config.headers['Content-Type'];
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

httpAdapterInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // If login is timeout, call 'logoutUser' to remove the persisted state and reroute to login.
    if (error.response?.status === 401) {
      clearTokensFromStorage();
      sessionExpirySubject.next(true);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default httpAdapterInstance;
