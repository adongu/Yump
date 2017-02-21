import React from 'react';
import { hashHistory } from 'react-router';

const HomeSearchBar = () => {
  return (
    <div className="Home__search-box">
      <label className="Home__search-find-label"><span>Find</span><input placeholder="tacos, cheap dinner, Jeff's"></input></label>

      <button onClick={hashHistory.push('/')}className="Home__search-find-btn">Find</button>
    </div>
  )
}

export default HomeSearchBar;
