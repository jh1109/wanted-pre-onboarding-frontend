import React from 'react';

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
