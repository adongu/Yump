import React from 'react';

const SearchBar = () => {
  return(
    <div className="header__nav-search-box">
      <label className="header__nav-search-find-label"><span>Find</span><input className="header__nav-search-find-input" placeholder="tacos, cheap dinner, Jeff's"></input></label>
      <label className="header__nav-search-near-label"><span>Near</span><input className="header__nav-search-near-input" placeholder="address, neighborhood, city, state, or zip"></input></label>
      <button className="header__nav-search-btn">Find</button>
    </div>
  )
}

export default SearchBar;
