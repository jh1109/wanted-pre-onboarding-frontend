import React, { Fragment, useEffect, useRef, useState } from 'react';

import Header from '../components/header/Header';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

import classes from './Register.module.css';
import Input from '../components/UI/Input';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/UI/modal/Modal';

const RegisterPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  const emailIsValidHandler = () => {
    if (emailInputRef.current.value.includes('@')) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };
  const passwordIsValidHandler = () => {
    if (passwordInputRef.current.value.trim().length > 7) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };
  const goSignIn = () => {
    setTimeout(() => {
      navigate('/signin');
    }, 1000);
  };

  useEffect(() => {
    const formIsValidHandler = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 300);
    return () => {
      clearTimeout(formIsValidHandler);
    };
  }, [emailIsValid, passwordIsValid]);
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    console.log('회원가입 완료!');
    console.log(`id: ${emailInputRef.current.value}`);
    console.log(`password: ${passwordInputRef.current.value}`);
    goSignIn();
  };
  return (
    <Fragment>
      <Header />
      <main>
        <Modal>
          <p>회원가입 완료! 로그인 페이지로 이동합니다.</p>
        </Modal>
        <Card className={classes.form}>
          <form onSubmit={registerSubmitHandler}>
            <div className={classes.input}>
              <Input
                ref={emailInputRef}
                id="email-input"
                label="E-Mail"
                type="email"
                onChange={emailIsValidHandler}
              />
            </div>
            <div className={classes.input}>
              <Input
                ref={passwordInputRef}
                id="password-input"
                label="Password"
                type="password"
                onChange={passwordIsValidHandler}
              />
            </div>
            <Button
              type="submit"
              id="signup-button"
              button={{ disabled: !formIsValid }}
            >
              회원가입
            </Button>
          </form>
        </Card>
      </main>
    </Fragment>
  );
};

export default RegisterPage;
