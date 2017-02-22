import React from 'react';
import { Link } from 'react-router';

const HomeSearchBar = () => {

  const search = (e) => {
    e.preventDefault();
    tags = e.target.value.split(" ").join("+");
    // const url = '/businesses/search/?find_tags=${tags}'
  }

  return (
    <form className="home__nav-search-box">
      <label className="home__nav-search-find-label"><span>Find</span><input placeholder="tacos, cheap dinner, Jeff's"></input></label>

      <button className="home__search-find-btn">Find</button>
    </form>
  )
}

export default HomeSearchBar;
