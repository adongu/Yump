import React from 'react';
import { Link, withRouter } from 'react-router'
import BusinessPageAll from "./business_page_all";
import BusinessPageShow from "./business_page_show";

class BusinessPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h2>hello</h2>
      </div>
    );
  }
}

export default withRouter(BusinessPage)
