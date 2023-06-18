import React from 'react';

const Button = ({ type, id, onClick, children }) => {
  return (
    <button type={type || 'button'} data-testid={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
