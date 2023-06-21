import React, { Fragment, useState } from 'react';

import Header from '../components/header/Header';

import AuthForm from '../components/authority/AuthForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MessageModal from '../components/UI/modal/MessageModal';

const RegisterPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();
  const registerSubmitHandler = async (email, password) => {
    axios
      .post(
        'https://www.pre-onboarding-selection-task.shop/auth/signup',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        setTimeout(() => {
          navigate('/signin');
        }, 1500);
        setIsRegistered(true);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <Fragment>
      <Header />
      <main>
        {isRegistered && (
          <MessageModal message="회원가입 완료! 로그인 페이지로 이동합니다..." />
        )}
        <AuthForm
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
