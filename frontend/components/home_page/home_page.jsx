import React from 'react';
import { Link } from 'react-router';
import HomeHeaderBar from '../header/home_header';

const sessionLinks = () => {
  return (
    <div className="home__header-session-box">
      <nav className="home__header-session-links">

        <div className="home__header-login-link">
          <Link to="/login" activeClassName="current">Login</Link>
        </div>

        <div className="home__header-signup-link">
          <Link to="/signup" activeClassName="current">Sign Up</Link>
        </div>
      </nav>

    </div>
  )
};

const personalGreeting = (currentUser, logout ) => (
  <div className="home__header-loggedin">
    <hgroup className="home__header-group">
      <h2 className="home__header-name">Hi, {currentUser.username}!</h2>
      <button className="home__header-logout-btn" onClick={logout}>Log Out</button>
    </hgroup>

  </div>
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
    <div className="home__header-bar-box">
      {sessionBar()}

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
}

export default HomePage;
