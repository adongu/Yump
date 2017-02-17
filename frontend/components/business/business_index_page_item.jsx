import React from "react";

const BusinessIndexPageItem = ({key, business, fetchBusiness}) => {
  return (
      <li>
        <ul>
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
