import React from '.react';
import { Link, withRouter } from 'react-router'
import BusinessAll from "./business_all";
import BusinessShow from "./business_show";

class BusinessPage extends React.Component {
  constructor () {
    this.state = this.props.businesses
  }

  render () {
    return (

    )

  }
}

export default withRouter(BusinessPage)
