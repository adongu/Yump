import React from 'react';
import { Link, withRouter } from 'react-router';

const BusinessPageAll = ({ fetchBusinesses, errors }) => {
  const renderAllBusinesses = () => {
    return props.fetchBusinesses;
  }

  return (
    <div>
      <ul>
        {this.renderAllBusinesses}
      </ul>
    </div>
  )
}

export default BusinessPageAll;
