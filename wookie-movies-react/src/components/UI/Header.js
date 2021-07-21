import React from 'react';
import Search from './Search';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Wookie<br/>Movies</h1>
      <Search />
    </header>
  )
}

export default Header
