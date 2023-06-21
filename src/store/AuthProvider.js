import React, { useEffect, useState } from 'react';
import AuthContext from './auth-context';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setIsLogin(true);
    } else return;
  }, []);

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
        setIsLogin(true);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <AuthContext.Provider
      value={{ isLogin: isLogin, onLogin: loginSubmitHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
