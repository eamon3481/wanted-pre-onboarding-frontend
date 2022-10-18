import React from 'react';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import * as S from './SignInPage.style';

const SignInPage = () => {
  return (
    <S.Form>
      <InputWithLabel label="이메일" type="email" required />
      <InputWithLabel label="패스워드" type="password" minLength={8} required />
      <InputWithLabel
        label="패스워드 확인"
        type="password"
        minLength={8}
        required
      />

      <button>회원 가입</button>
    </S.Form>
  );
};

export default SignInPage;
