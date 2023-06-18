import React from 'react';

import classes from './Header.module.css';
import Button from '../UI/Button';
const Header = () => {
  return (
    <header className={classes.header}>
      <h1>노주희 | 프리온보딩 프론트엔드 인턴십 사전 과제</h1>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Button>로그인</Button>
          </li>
          <li>
            <Button>회원가입</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
