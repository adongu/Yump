import React from 'react';
import { Link } from 'react-router';


const HomeBanner ({sessionBar}) => {
  <div className="home">
    <div className="home__header-bar-box">
      <div className="row home__header-bar-nav-box">
        <div className="home__header-bar-left">
          <Link className="home__header-bar-review" to="/">Write a Review</Link>
        </div>
      </div>


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
    </div>
  </div>
}

export default HomeBanner
