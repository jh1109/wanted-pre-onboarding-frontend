import React, { Fragment, useState } from 'react';

import Header from '../components/header/Header';

import MessageModal from '../components/UI/modal/MessageModal';
import AuthForm from '../components/authority/AuthForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  const goSignIn = () => {
    setTimeout(() => {
      navigate('/signin');
    }, 1500);
  };
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    console.log('회원가입 완료!');
    // console.log(`id: ${emailInputRef.current.value}`);
    // console.log(`password: ${passwordInputRef.current.value}`);
    setIsRegistered(true);
    goSignIn();
  };

  return (
    <Fragment>
      <Header />
      <main>
        {isRegistered && (
          <MessageModal message="회원가입 완료! 로그인 페이지로 이동합니다..." />
        )}
        <AuthForm onSubmit={registerSubmitHandler} btnValue="회원가입" />
      </main>
    </Fragment>
  );
};

export default RegisterPage;
