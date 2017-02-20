import React from 'react';
import { Link, withRouter } from 'react-router';

class BusinessPageShow extends React.Component{

  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId)
  }

  render () {
    let business = (this.props.business)
    console.log(business);
    return (
    <div className="business__show">
      <div className="business__current-box">
        <ul className="business__current-info">
          <li>{business.name}</li>
          <li>{business.street}</li>
          <li>{business.city}</li>
          <li>{business.state}</li>
          <li>{business.zip}</li>
          <li>{business.phone}</li>
        </ul>
      </div>

      <div className="Map">
        <span>{business.latitude}</span>
        <span>{business.longitude}</span>
      </div>
    </div>
    )
  }
}

export default withRouter(BusinessPageShow);
