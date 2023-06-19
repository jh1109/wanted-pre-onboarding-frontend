import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import AuthForm from '../components/authority/AuthForm';

const LoginPage = () => {
  const loginSubmitHandler = (email, password) => {
    console.log(`로그인! email: ${email}, password: ${password}`);
  };
  return (
    <Fragment>
      <Header />
      <main>
        <AuthForm
          modalMessage="환영합니다!"
          onSubmit={loginSubmitHandler}
          btnValue="로그인"
          btnId="signin-button"
          onGoAnotherPage="/todo"
        />
      </main>
    </Fragment>
  );
};

export default LoginPage;
