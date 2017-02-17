import React from "react";
import { Link } from 'react-router';

const BusinessIndexPageItem = ({business}) => {

  return (

    <li className="business__index-item">
      <Link className="business__pic" to={`/businesses/${business.id}`}>{business.name}</Link>
      <ul className="business__index-item-box">
        <li>{business.name}</li>
        <li>{business.street}</li>
        <li>{business.city}</li>
        <li>{business.state}</li>
        <li>{business.zip}</li>
        <li>{business.phone}</li>
        <li>{business.latitude}</li>
        <li>{business.longitude}</li>
      </ul>
    </li>
  )
}

export default BusinessIndexPageItem;
