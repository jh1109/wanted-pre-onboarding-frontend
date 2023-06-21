import React, { Fragment, useState } from 'react';
import Header from '../components/header/Header';
import AuthForm from '../components/authority/AuthForm';
import { useNavigate } from 'react-router';
import axios from 'axios';
import MessageModal from '../components/UI/modal/MessageModal';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const loginSubmitHandler = async (email, password) => {
    axios
      .post(
        'https://www.pre-onboarding-selection-task.shop/auth/signin',
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
        localStorage.setItem('access_token', response.data['access_token']);
        setTimeout(() => {
          navigate('/todo');
        }, 1500);
        setIsLogin(true);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <Fragment>
      <Header />
      {isLogin && <MessageModal message="환영합니다!" />}
      <main>
        <AuthForm
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
