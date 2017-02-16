import React from 'react';
import { Link, withRouter } from 'react-router'
import BusinessPageAll from "./business_page_all";
import BusinessPageShow from "./business_page_show";

class BusinessPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.props.businesses;
    this.fetchBusinesses = this.props.fetchBusinesses.bind(this);
    this.fetchBusiness = this.props.fetchBusiness.bind(this);
  }

  componentDidMount(){
    if (typeof this.props.businessId !== "undefined") {
      this.props.fetchBusiness(this.props.businessId)
    } else {
      this.props.fetchBusinesses();
    }
  }
  //
  // componentWIllReceiveProp(nextProp){
  //   this.props.fetchBusinesses()
  // }

  renderBusinesses () {
    if (typeof this.props.businessId !== "undefined") {
      return(
        <BusinessPageShow
          businessId={this.props.businessId}
          fetchBusiness={this.props.fetchBusiness}
          errors={this.props.errors}
        />
      )
    } else {
      return(
        <BusinessPageIndex
          fetchBusiness={this.props.fetchBusinesses}
          errors={this.props.errors}
        />
      )
    }
  }

  render () {
    return (
      <div>
        <h2> HOME PAGE </h2>
        {this.renderBusinesses}
      </div>
    );
  }
}

export default withRouter(BusinessPage)
