import React from 'react';
import { Link } from 'react-router';
import headerBar from '../header/header_bar';
import HomePageContainer from '../home_page/home_page_container';

class BusinessPageShow extends React.Component{

  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId)
  }

  render () {
    let business = (this.props.business)
    return (
    <div className="business__show">
      <div className="header__nav">
        <Link to="/" activeClassName="current">
          <img
            className="header__nav-bar-logo"
            src={ window.assets.logo }
            />
        </Link>
        <div className="header__nav-search">
          <label>Find<input placeholder="tacos, cheap dinner, Jeff's"></input></label>
          <label>Near<input placeholder="address, neighborhood, city, state, or zip"></input></label>
          <button >Find</button>
        </div>
      </div>

      <div className="business__current-box">
        <ul className="business__current-info">
          <li>{business.name}</li>
          <li>{business.street}</li>
          <li>{business.city}</li>
          <li>{business.state}</li>
          <li>{business.zip}</li>
          <li>{business.phone}</li>
          <li>{business.latitude}</li>
          <li>{business.longitude}</li>
        </ul>
      </div>
    </div>
    )
  }
}

export default BusinessPageShow;
