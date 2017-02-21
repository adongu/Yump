import React from 'react';

const SearchBar = () => {
  return(
    <div className="header__nav-search-box">
      <label className="header__nav-search-find-label"> Find
        <input className="header__nav-search-find-input" placeholder="tacos, cheap dinner, Jeff's"></input>
      </label>

      <button className="header__nav-search-btn">Find</button>
    </div>
  )
}

export default SearchBar;
