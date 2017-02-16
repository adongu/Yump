import React from 'react';

const BusinessPageShow = () => {
  return (
    <div>
      {props.fetchBusiness(props.businessId)}
    </div>
  )
}

export default BusinessPageShow;
