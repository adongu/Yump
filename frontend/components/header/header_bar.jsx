import { Link } from "react-router";
import React from 'react';

const headerBar = () => {
  return (
    <div className="header__box">
      <div className="header__logo-box">
        <Link to="/" activeClassName="current">
          <img
            className="header__logo"
            src={ window.assets.logo }
          />
        </Link>

      </div>
    </div>
  )
};

export default headerBar;
