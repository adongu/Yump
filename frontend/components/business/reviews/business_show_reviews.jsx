import React from 'react';

const BusinessShowReview = ({review}) => {
  let {reviewer} = review
  return (
    <div className="reviews__container">
      <div className="reviews__container-left">
        <ul>
          <li className="reviews__reviewer-name">
            <span>{review.reviewer.f_name}</span>
            <span>{review.reviewer.l_name}</span>
          </li>
          <li>
            {review.reviewer.zip}
          </li>
        </ul>
      </div>

      <div className="reviews__container-right">

        <div className="reviews__body-header">
            <span className="reviews__ratings">Rating {review.rating}</span>
            <span className="reviews__date">{review.created_at}</span>
        </div>

        <div className="reviews__body-text">
          {review.review}
        </div>

        <div className="reviews__body-images">

        </div>
      </div>

    </div>
  )
}

export default BusinessShowReview;
