import React, { Fragment } from 'react';

import Header from '../components/header/Header';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

import classes from './Register.module.css';
import Input from '../components/UI/Input';

const RegisterPage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Card className={classes.form}>
          <form>
            <div className={classes.input}>
              <Input id="email-input" label="E-Mail" type="email" />
            </div>
            <div className={classes.input}>
              <Input id="password-input" label="Password" type="password" />
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
