import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api, { SignPayload } from '../api/Api';
import { tokenStorage } from '../utils/tokenStorage';

export const useAuth = () => {
  const navigate = useNavigate();
  const logIn = (token: string) => {
    tokenStorage.setAuthToken(token);
    navigate('/todo');
  };
  const signIn = async ({ email, password }: SignPayload) => {
    try {
      const { data } = await api.signIn({ email, password });
      logIn(data.access_token);
    } catch (e: any) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 404) {
          alert('이메일과 패스워드가 맞지 않습니다');
          return;
        }
        alert(e.message);
      }
    }
  };
  const signOut = () => {
    tokenStorage.removeAuthToken();
    navigate('/');
  };

  const signUp = async ({ email, password }: SignPayload) => {
    try {
      const { data } = await api.signUp({ email, password });
      logIn(data.access_token);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 400) {
          alert('이미 존재하는 이메일 입니다.');
          return;
        }
        alert(e.message);
      }
    }
  };
  return { signIn, signOut, signUp };
};
