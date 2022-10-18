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

  getTodos = () => {
    return this.req.get<Todo[]>('/todos', {
      headers: this.getUserAuthHeader(),
    });
  };

  createTodo = (data: Pick<Todo, 'todo'>) => {
    return this.req.post<Todo>('/todos', {
      headers: this.getUserAuthHeader(),
      data,
    });
  };

  updateTodo = (todoId: number, data: Partial<Todo>) => {
    return this.req.put<Todo>(`/todos/${todoId}`, {
      headers: this.getUserAuthHeader(),
      data,
    });
  };

  deleteTodo = (todoId: number) => {
    return this.req.delete(`/todos/${todoId}`, {
      headers: this.getUserAuthHeader(),
    });
  };
}

export type SignPayload = { email: string; password: string };
export type SignResponse = { access_token: string };

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

const api = new Request();

export default api;
