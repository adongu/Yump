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
//
// renderHeader(linkType) {
// }


const HomePage = ({currentUser, logout}) => {
  const sessionBar = () => {
    if (currentUser) {
      return personalGreeting(currentUser, logout)
    } else {
      return sessionLinks()
    }
  };

  return(
    <div>
      <div className="home__header-bar-session">
        {sessionBar()}
      </div>

    </div>

  )
}

export default HomePage;
