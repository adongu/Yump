import React from 'react';
import { Link, withRouter } from 'react-router';
import HeaderBar from '../header/header_bar';
import HomeHeaderBar from '../header/header_bar';

const sessionLinks = () => {
  return (
    <div className="session__box">
      <nav className="home__header-session-links">
        <div><Link to="/login" activeClassName="current">Log In</Link></div>
        <div><Link to="/signup" activeClassName="current">Sign Up</Link></div>
      </nav>
    </div>
  )
};

const personalGreeting = (currentUser, logout ) => (
    <hgroup className="home__header-group">
      <h2 className="home__header-name">Hi, {currentUser.username}!</h2>
      <button className="home__header-logout-btn" onClick={logout}>Log Out</button>
    </hgroup>
);



const HomePage = ({currentUser, logout}) => {
  const sessionBar = () => {
    if (currentUser) {
      return personalGreeting(currentUser, logout)
    } else {
      return sessionLinks()
    }
  };

  return (
    <div>
      <HeaderBar />
      {sessionBar()}
    </div>
  )
}

export default withRouter(HomePage);
