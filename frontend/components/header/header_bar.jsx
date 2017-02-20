import { Link } from "react-router";
import React from 'react';

const HeaderBar = () => {
  return (
    <div className="header__nav">
      <Link to="/" activeClassName="current">
        <img
          className="header__nav-bar-logo"
          src={ window.assets.logo }
          />
      </Link>
      <div className="header__nav-search">
        <label>Find<input placeholder="tacos, cheap dinner, Jeff's"></input></label>
        <label>Near<input placeholder="address, neighborhood, city, state, or zip"></input></label>
        <button >Find</button>
      </div>
    </div>
  )
};

export default HeaderBar;
