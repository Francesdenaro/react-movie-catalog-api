import React from 'react'
import searchIcon from '../../img/search.png'
import './Search.css';

const Search = () => {
  return (
    <form className="search__form">
      <div className="form-group">
        <input className="form-control"/>
        <button className="btn"><img src={searchIcon}/></button>
      </div>
    </form>
  )
}

export default Search
