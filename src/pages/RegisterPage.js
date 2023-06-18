import React, { Fragment, useRef } from 'react';

import Header from '../components/header/Header';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

import classes from './Register.module.css';
import Input from '../components/UI/Input';

const RegisterPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    console.log('회원가입 완료!');
    console.log(`id: ${emailInputRef.current.value}`);
    console.log(`password: ${passwordInputRef.current.value}`);
  };
  return (
    <Fragment>
      <Header />
      <main>
        <Card className={classes.form}>
          <form onSubmit={registerSubmitHandler}>
            <div className={classes.input}>
              <Input
                ref={emailInputRef}
                id="email-input"
                label="E-Mail"
                type="email"
              />
            </div>
            <div className={classes.input}>
              <Input
                ref={passwordInputRef}
                id="password-input"
                label="Password"
                type="password"
              />
            </div>
            <Button type="submit" id="signup-button">
              회원가입
            </Button>
          </form>
        </Card>
      </main>
    </Fragment>
  );
};

export default RegisterPage;
