import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login">
    <Link to="/login" activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout ) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
