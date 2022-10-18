import React from 'react';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import { useAuth } from '../../hooks/useAuth';

import * as S from './SignUpPage.style';

const SignUpPage = () => {
  const { signUp } = useAuth();

  const handleSummitSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;
    if (password !== confirmPassword) {
      alert('패스워드를 확인해 주세요');
      return;
    }

    signUp({ email, password });
  };

  return (
    <S.Form onSubmit={handleSummitSignUp}>
      <InputWithLabel label="이메일" type="email" name="email" required />
      <InputWithLabel
        label="패스워드"
        type="password"
        name="password"
        minLength={8}
        required
      />
      <InputWithLabel
        label="패스워드 확인"
        type="password"
        name="confirmPassword"
        minLength={8}
        required
      />

      <button>회원 가입</button>
    </S.Form>
  );
};

export default SignUpPage;
