import React, { Fragment } from 'react';

import Header from '../components/header/Header';

import AuthForm from '../components/authority/AuthForm';

const RegisterPage = () => {
  const registerSubmitHandler = (email, password) => {
    console.log(`회원가입! email: ${email}, password: ${password}`);
  };

  return (
    <Fragment>
      <Header />
      <main>
        <AuthForm
          modalMessage="회원가입 완료! 로그인 페이지로 이동합니다..."
          onSubmit={registerSubmitHandler}
          btnValue="회원가입"
          btnId="signup-button"
          onGoAnotherPage="/signin"
        />
      </main>
    </Fragment>
  );
};

export default RegisterPage;
