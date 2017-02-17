import React from "react";

const BusinessIndexPageItem = ({key, business, fetchBusiness}) => {
  return (
      <li>
        <ul>
          <li>name</li>
          <li>street</li>
          <li>city</li>
          <li>state</li>
          <li>zip</li>
          <li>phone</li>
          <li>latitude</li>
          <li>longitude</li>
        </ul>
      </li>
  )
}

export default BusinessIndexPageItem;
