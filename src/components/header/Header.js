import React from 'react';

import classes from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={classes.header}>
      <h1>노주희 | 프리온보딩 프론트엔드 인턴십 사전 과제</h1>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link to="/signin">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
