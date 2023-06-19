import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import AuthForm from '../components/authority/AuthForm';

const LoginPage = () => {
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log('로그인 버튼 클릭!');
  };
  return (
    <Fragment>
      <Header />
      <main>
        <AuthForm onSubmit={loginSubmitHandler} btnValue="로그인" />
      </main>
    </Fragment>
  );
};

export default LoginPage;
