import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import * as S from './LoginPage.style';
const LogInPage = () => {
  const navigate = useNavigate();
  const onClickSignIn = () => {
    navigate('/sign-in');
  };
  return (
    <S.Form>
      <InputWithLabel label="이메일" type="email" required />
      <InputWithLabel label="패스워드" type="password" minLength={8} required />

      <button>제출</button>
      <button type="button" onClick={onClickSignIn}>
        회원 가입
      </button>
    </S.Form>
  );
};

export default LogInPage;
