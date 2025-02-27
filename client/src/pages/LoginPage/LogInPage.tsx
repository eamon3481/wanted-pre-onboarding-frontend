import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import { useAuth } from '../../hooks/useAuth';
import * as S from './LoginPage.style';
const LogInPage = () => {
  const navigate = useNavigate();
  const onClickSignIn = () => {
    navigate('/sign-up');
  };

  const { signIn } = useAuth();
  const handleSummitSignIn = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    signIn({ email, password });
  };
  return (
    <S.Form onSubmit={handleSummitSignIn}>
      <InputWithLabel label="이메일" type="email" name="email" required />
      <InputWithLabel
        label="패스워드"
        type="password"
        name="password"
        minLength={8}
        required
      />

      <button>제출</button>
      <button type="button" onClick={onClickSignIn}>
        회원 가입
      </button>
    </S.Form>
  );
};

export default LogInPage;
