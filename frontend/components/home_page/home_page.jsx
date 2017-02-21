import React from 'react';
import { Link, withRouter } from 'react-router';
import HeaderBar from '../header/header_bar';
import HomeHeaderBar from '../header/header_bar';
import SearchBar from '../searchbar/search_bar';
import HomeSearchBar from '../searchbar/home_search_bar';


const sessionLinks = () => {
  return (
    <div className="home__nav-login-box">
      <nav className="home__nav-login-links">
        <Link to="/login" activeClassName="current">Log In</Link>
        <Link to="/signup" activeClassName="current">Sign Up</Link>
      </nav>
    </div>
  )
};

const personalGreeting = (currentUser, logout ) => {
    return (
      <div className="home__nav-profile-box">
        <hgroup className="home__nav-profile-content">
          <h2 className="home__nav-profile-greeting">Hi, {currentUser.username}!</h2>
          <button className="home__nav-profile-logout-btn" onClick={logout}>Log Out</button>
        </hgroup>
      </div>
    )
};

const HomePage = ({currentUser, logout, router}) => {

  const sessionBar = () => {
    if (currentUser) {
      return personalGreeting(currentUser, logout)
    } else {
      return sessionLinks()
    }
  };

  const renderHeader = () => {
    if (router.params.id) {
      return(
        <div className="show__nav-container">
          <div className="show__nav-box">
            <HeaderBar />
            <SearchBar />
            {sessionBar()}
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <div className="home__nav-box">
            <HomeHeaderBar />
            {sessionBar()}
          </div>
          <HomeSearchBar />
        </div>
      );
    }
  }

  return (
    <div className="header">
      {renderHeader()}
    </div>
  )
}

export default withRouter(HomePage);
