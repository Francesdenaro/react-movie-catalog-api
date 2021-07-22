import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import './Header.css';


const Header = ({getQuery}) => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Wookie<br/>Movies</h1>
      </Link>
      <nav>
        <Link to={`/bookmarks`}>
          <span className="btn">Bookmarks</span>
        </Link>
        <Search getQuery={getQuery}/>
      </nav>
    </header>
  )
}

export default Header
