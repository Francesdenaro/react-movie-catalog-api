import React, {useState} from 'react'
import searchIcon from '../../img/search.png'
import './Search.css';

const Search = ({getQuery}) => {
  const [searchText, setSearchText] = useState('');

  const textChangeHandler = (e) => {
    setSearchText(e.target.value);
    getQuery(e.target.value);
  } 

  return (
    <form onSubmit={() => setSearchText('')} className="search__form">
      <div className="form-group">
        <input value={searchText} onChange={textChangeHandler} className="form-control"/>
        <button className="btn"><img src={searchIcon} alt="Search"/></button>
      </div>
    </form>
  )
}

export default Search
