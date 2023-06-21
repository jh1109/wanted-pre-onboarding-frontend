import React, { Fragment, useContext } from 'react';
import Header from '../components/header/Header';
import AuthForm from '../components/authority/AuthForm';
import MessageModal from '../components/UI/modal/MessageModal';
import AuthContext from '../store/auth-context';

const LoginPage = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Header />
      {authCtx.isLogin && <MessageModal message="환영합니다!" />}
      <main>
        <AuthForm
          onSubmit={authCtx.onLogin}
          btnValue="로그인"
          btnId="signin-button"
          onGoAnotherPage="/todo"
        />
      </main>
    </Fragment>
  );
};

export default LoginPage;
