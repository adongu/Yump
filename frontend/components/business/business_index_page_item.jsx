import React from "react";
import { Link } from 'react-router';

const BusinessIndexPageItem = ({business}) => {

  const renderStars = (rating) => {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((ele)=>{
      return (
        <span className={ele <= this.state.rating ? 'active_star' : ''} onClick={()=>{this.setState({rating: ele})}} key={ele}>☆</span>
      )
    })
  }
  console.log(business);

  return (

    <li className="business__index-item">
      <div className="business__pic-box">
        <Link to={`/businesses/${business.id}`}><img className="business__img" src="https://s3.amazonaws.com/yumpapp-dev/harold.jpg"/></Link>
      </div>

      <div className="business__index">
        <ul className="business__index-item-container">
          <li>{business.name}</li>
          <li>{business.street}</li>
          <li>{business.city}</li>
          <li>{business.state}</li>
          <li>{business.zip}</li>
          <li>{business.phone}</li>
          <li>{business.latitude}</li>
          <li>{business.longitude}</li>
        </ul>
      </div>

      <div className="business__index-box-right">
        <div className="business__review-box">
          <span className="business__review-rating">
            {this.renderStars()}
          </span>

          <span className="business__review-count">{business.review_count} Reviews</span>
        </div>

        <div className="business__price">
            <span>{business.price}</span>
        </div>
      </div>
    </li>
  )
}

export default BusinessIndexPageItem;
