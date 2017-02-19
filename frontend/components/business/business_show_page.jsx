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
      <div className="business__current-box">
        <div className="">
          <headerBar />
        </div>
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
        <HomePageContainer pageType={"show"} />
      </div>
    )
  }
}

export default BusinessPageShow;
