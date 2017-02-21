import React from 'react';

const BusinessShowReview = ({review}) => {
  console.log()
  return (
    <div className="reviews__container">
      <div className="reviews__container-left">

      </div>

      <div className="reviews__container-right">

        <div className="reviews__body-header">
            <span className="reviews__ratings">ratings</span>
            <span className="reviews__date">date created</span>
        </div>

        <div className="reviews__body-text">
          review text
        </div>

        <div className="reviews__body-images">

        </div>
      </div>

    </div>
  )
}

export default BusinessShowReview;
