import axios, { AxiosInstance } from 'axios';
import { tokenStorage } from '../utils/tokenStorage';

const BASE_URL = 'https://pre-onboarding-selection-task.shop/';

class Request {
  public req: AxiosInstance;
  constructor() {
    this.req = axios.create({
      baseURL: BASE_URL,
    });
  }
  getUserAuthHeader = () => {
    const userAuthToken = tokenStorage.getAuthToken();

    return userAuthToken
      ? {
          Authorization: 'Bearer ' + userAuthToken,
        }
      : {};
  };

  signUp = ({ email, password }: SignPayload) => {
    return this.req.post<SignResponse>('/auth/signup', { email, password });
  };

  signIn = ({ email, password }: SignPayload) => {
    return this.req.post<SignResponse>('/auth/signin', { email, password });
  };
}

export type SignPayload = { email: string; password: string };
export type SignResponse = { access_token: string };

const api = new Request();

export default api;
