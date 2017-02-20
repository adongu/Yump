import { Link } from "react-router";
import React from 'react';

const HeaderBar = () => {
  return (
    <div className="header__nav-logo-box">
      <Link to="/" activeClassName="current">
        <img
          className="header__nav-logo-img"
          src={ window.assets.logo }
          />
      </Link>
    </div>
  )
};

export default HeaderBar;
