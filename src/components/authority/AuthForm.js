import React, { Fragment, useEffect, useRef, useState } from 'react';
import Card from '../UI/Card';

import classes from './AuthForm.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';
import MessageModal from '../UI/modal/MessageModal';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({
  modalMessage,
  onSubmit,
  btnValue,
  btnId,
  onGoAnotherPage,
}) => {
  const [isSubmitSucceeded, setIsSubmitSucceeded] = useState(false);

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
  useEffect(() => {
    const formIsValidHandler = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 300);
    return () => {
      clearTimeout(formIsValidHandler);
    };
  }, [emailIsValid, passwordIsValid]);

  const goAnotherPage = () => {
    setTimeout(() => {
      navigate(onGoAnotherPage);
    }, 1500);
  };
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(emailInputRef.current.value, passwordInputRef.current.value);
    setIsSubmitSucceeded(true);
    goAnotherPage();
  };

  return (
    <Fragment>
      {isSubmitSucceeded && <MessageModal message={modalMessage} />}
      <Card className={classes.form}>
        <form onSubmit={authFormSubmitHandler}>
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
          <Button type="submit" id={btnId} button={{ disabled: !formIsValid }}>
            {btnValue}
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AuthForm;
