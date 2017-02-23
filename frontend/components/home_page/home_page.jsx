import React from 'react';
import { Link, withRouter } from 'react-router';
import HeaderBar from '../header/header_bar';
import HomeHeaderBar from '../header/header_bar';
import SearchBar from '../searchbar/search_bar';

const sessionLinks = () => {
  return (
    <nav className="home__nav-login-box">
      <div className="home__nav-login-links">
        <Link to="/login" activeClassName="current" className="home__nav-login">Log In</Link>
        <Link to="/signup" activeClassName="current" className="home__nav-signup">Sign Up</Link>
      </div>
    </nav>
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
    console.log(router)
    if (router.params.id != "") {
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
        <div className="home__nav-container">
          <div className="home__nav-box">
            <div className="home__nav-session-bar">
              <div>
                {sessionBar()}
              </div>
            </div>

            <div className="home__nav-header-bar">
              <HomeHeaderBar />
            </div>

            <div className='home__nav-search-bar'>
              <SearchBar />

            </div>
          </div>
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
