import React from 'react';

const HomeSearchBar = () => {
  return (
    <div className="Home__search-box">
      <label className="Home__search-find-label"><span>Find</span><input placeholder="tacos, cheap dinner, Jeff's"></input></label>
      <label className="Home__search-near-label"><span>Near</span><input placeholder="address, neighborhood, city, state, or zip"></input></label>
      <button className="Home__search-find-btn">Find</button>
    </div>
  )
}

export default HomeSearchBar;
