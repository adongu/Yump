import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (

  <div className="home__box">
    <nav className="home__header">
      <div>
        <h3>Yump</h3>
      </div>
      <div>
        <Link to="/login" activeClassName="current">Login</Link>
      </div>
      <div>
        <Link to="/signup" activeClassName="current">Sign Up</Link>
      </div>
    </nav>

  </div>
);

const personalGreeting = (currentUser, logout ) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const HomePage = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default HomePage;
