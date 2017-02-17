import React from 'react';
import { Link } from 'react-router';
import headerBar from '../header/header_bar';

class BusinessPageShow extends React.Component{

  componentDidMount() {
    console.log(this.props)
    this.props.fetchBusiness(this.props.businessId)
  }

  render () {
    let business = (this.props.business)
    console.log(business)
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
      </div>
    )
  }
}

export default BusinessPageShow;
