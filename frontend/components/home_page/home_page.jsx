import React from 'react';
import { Link } from 'react-router';
import HomeHeaderBar from '../header/home_header';

const sessionLinks = () => {
  return (
      <nav className="home__header-session-links">

        <Link to="/login" activeClassName="current">Log In</Link>
        <Link to="/signup" activeClassName="current">Sign Up</Link>
      </nav>
  )
};

const personalGreeting = (currentUser, logout ) => (
    <hgroup className="home__header-group">
      <h2 className="home__header-name">Hi, {currentUser.username}!</h2>
      <button className="home__header-logout-btn" onClick={logout}>Log Out</button>
    </hgroup>
);


const HomePage = ({ currentUser, logout }) => {
  const sessionBar = () => {
    if (currentUser) {
      return personalGreeting(currentUser, logout)
    } else {
      return sessionLinks()
    }
  };

  return(
    <div className="home">
      <div className="home__header-bar-box">


        <div className="row home__header-bar-nav-box">
          <div className="home__header-bar-left">
            <Link className="home__header-bar-review" to="/">Write a Review</Link>
          </div>
          <div className="home__header-bar-session">
            {sessionBar()}
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
  )
}

export default HomePage;
