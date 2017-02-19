import { Link } from "react-router";
import React from 'react';

const headerBar = () => {
  return (
    <div className="header__nav">
      <Link to="/" activeClassName="current">
        <img
          className="header-nav-bar-logo"
          src={ window.assets.logo }
          />
      </Link>
      <div className="header__nav-search">
        <label>Find<input placeholder="tacos, cheap dinner, Jeff's"></input></label>
        <label>Near<input placeholder="address, neighborhood, city, state, or zip"></input></label>
      </div>
    </div>
  )
};

export default headerBar;
