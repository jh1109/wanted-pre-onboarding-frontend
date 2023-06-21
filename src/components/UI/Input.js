import React, { Fragment } from 'react';

const Input = React.forwardRef(({ id, label, type, onChange }, ref) => {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} type={type} data-testid={id} onChange={onChange} />
    </Fragment>
  );
});

export default Input;
