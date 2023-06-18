import React, { Fragment } from 'react';

const Input = React.forwardRef(({ id, label, type }, ref) => {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} type={type} data-testid={id} />
    </Fragment>
  );
});

export default Input;
