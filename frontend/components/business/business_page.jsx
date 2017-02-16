import React from 'react';
import { Link, withRouter } from 'react-router'
import BusinessPageAll from "./business_page_all";
import BusinessPageShow from "./business_page_show";

class BusinessPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.props.businesses;
  }
  //
  // componentDidMount(){
  //   this.props.fetchBusinesses()
  // }
  // //
  // componentWIllReceiveProp(nextProp){
  //   this.props.fetchBusinesses(this.props.params.id)
  // }

  renderBusinesses () {
    if (this.props.businessId) {
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
