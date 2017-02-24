import React from "react";
import { Link } from 'react-router';

const BusinessIndexPageItem = ({business}) => {


  const renderStars = (ratings) => {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((ele)=>{
      return (
        <span key={ele} className={ele <= ratings ? 'active_star' : 'no_star'} >☆</span>
      )
    })
  }

  // <li>{business.latitude}</li>
  // <li>{business.longitude}</li>
  return (

    <li className="business__index-item">
      <div className="business__pic-box">
        <Link to={`/businesses/${business.id}`}><img className="business__img" src={`${business.image_url}`}/></Link>
      </div>

      <div className="business__index">
        <ul className="business__index-item-container">
          <li className="business__title">{business.name}</li>
          <li>{business.street}</li>
          <li>{business.city}</li>
          <li>{business.state}</li>
          <li>{business.zip}</li>
          <li>{business.phone}</li>
        </ul>
      </div>

      <div className="business__index-box-right">
        <div className="business__review-box">
          <span className="business__review-rating">
            {renderStars(business.ratings)}
          </span>
          <span className="business__review-count">
            {business.review_count} Reviews
          </span>
        </div>

        <div className="business__price">
            <span>{business.price}</span>
        </div>
      </div>
    </li>
  )
}

export default BusinessIndexPageItem;
