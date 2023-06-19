import React from 'react';

import './Button.module.css';

const Button = ({ type, id, button, children }) => {
  return (
    <button type={type || 'button'} data-testid={id} {...button}>
      {children}
    </button>
  );
};

export default Button;
