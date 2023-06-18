import React, { Fragment } from 'react';

const Input = ({ id, label, type }) => {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input type={type} data-testid={id} />
    </Fragment>
  );
};

export default Input;
