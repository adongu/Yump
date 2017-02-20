import React from 'react';
import { Link, withRouter } from 'react-router';

class BusinessPageShow extends React.Component{

  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId)
  };

  renderNumReviews () {
    const reviews = this.props.reviews;
    if (reviews) {
      return (
        <span>{reviews.length}</span>
      )
    }
  };

  renderAvgRating () {
    const reviews = this.props.reviews;
    if (reviews) {
      let ratings = reviews.reduce((review) => {
        return review.rating
      })/reviews.length;
      return (
        <span>{ratings}</span>
      )
    }
  };

  renderTags () {

  }



  render () {
    let business = (this.props.business);
    console.log(business);

    return (
      <div className="business__show">
        <div className="business__current-box">
          <div className="business__current-review">
            <renderNumReviews />
            <renderAvgRating />
          </div>
          <ul className="business__current-info">
            <li>{business.name}</li>
            <li>{business.street}</li>
            <li>{business.city}</li>
            <li>{business.state}</li>
            <li>{business.zip}</li>
            <li>{business.phone}</li>
          </ul>
        </div>

        <div className="map">
          <div className="map-img">
            <span>{business.latitude}</span>
            <span>{business.longitude}</span>
          </div>
          <div className="business__show-images">
          </div>
        </div>

        <div className="business__show-body">
          <div className="reviews__container-box">
            <div className="reviews__container-form">
            </div>

            <div className="reviews__container-reviews">
            </div>
          </div>

          <div className="tags">
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(BusinessPageShow);
