import { Link } from "react-router";
import React from 'react';

const headerBar = () => {
  return (
    <div className="search__logo-box">
        <Link to="/" activeClassName="current">
          <img
            className="search__logo"
            src={ window.assets.logo }
          />
        </Link>
    </div>
  )
};

export default headerBar;
