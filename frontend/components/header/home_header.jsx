import { Link } from "react-router";
import React from 'react';

const HomeHeaderBar = () => {
  return (
      <div className="home__header-bar-content">
        <div className="home__header-bar-logo-box">
          <Link to="/" activeClassName="current">
            <img
              className="home__header-bar-logo"
              src={ window.assets.logo }
              />
          </Link>

          <div className="home__header-search-box">
            <input placeholder="Search"/>
          </div>
        </div>
      </div>
  )
};

export default HomeHeaderBar;
