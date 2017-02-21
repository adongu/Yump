import React from 'react';
import { Link } from 'react-router';

const HomeSearchBar = () => {

  const search = (e) => {
    e.preventDefault();
    tags = e.target.value.split(" ").join("+");
    // const url = '/businesses/search/?find_tags=${tags}'
  }

  return (
    <form className="Home__search-box">
      <label className="Home__search-find-label"><span>Find</span><input placeholder="tacos, cheap dinner, Jeff's"></input></label>

      <button className="Home__search-find-btn">Find</button>
    </form>
  )
}

export default HomeSearchBar;
