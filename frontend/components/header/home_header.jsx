import { Link } from "react-router";
import React from 'react';

const HomeHeaderBar = () => {
  return (
    <div className="home__header-img-box">
      <div className="home__header-logo-box">
        <Link to="/" activeClassName="current">
          <img
            className="home__header-logo"
            src={ window.assets.logo }
          />
        </Link>

      </div>
    </div>
  )
};

export default HomeHeaderBar;
