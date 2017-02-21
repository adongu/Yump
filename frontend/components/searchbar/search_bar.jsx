import React from 'react';

const SearchBar = () => {

  const search = (e) => {
    e.preventDefault();
    tags = e.target.value.split(" ").join("+");
    // const url = '/businesses/search/?find_tags=${tags}'
  }

  return(
    <form className="header__nav-search-box">
      <label className="header__nav-search-find-label"> Find
        <input className="header__nav-search-find-input" placeholder="tacos, cheap dinner, Jeff's"></input>
      </label>

      <button className="header__nav-search-btn">Find</button>
    </form>
  )
}

export default SearchBar;
