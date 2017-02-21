import React from 'react';
import { Link, withRouter } from 'react-router';

class BusinessPageShow extends React.Component{

  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId)
  };

  render () {
    let business = (this.props.business);
    console.log(business);

    return (
      <div className="business__show-container">
        <div className="business__show-box">

          <div className="business__box row">
            <div className="business__header-left">
              <div className="business__name-box">
                <span className="business__name">{business.name}</span>
              </div>

              <div className="business__review-box">
                <span className="business__review-rating">
                  <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </span>
                <span className="business__review-count">{business.review_count} Reviews</span>
              </div>

              <div className="business__price">
                  <span>{business.price}</span>
              </div>
            </div>

            <div className="business__header-right">
              <button>⭐ Write a Review</button>
            </div>
          </div>

          <div className="business__map-img-box row">
            <div className="business__map">
              <img
                className="business__header-map-image"
                src={ window.assets.static_map }
              />
              <span>{business.latitude}</span>
              <span>{business.longitude}</span>

              <ul className="business__current-info">
                <li className="business__current-address">{business.street}</li>
                <li className="business__current-address">{business.city}</li>
                <li className="business__current-address">{business.state}</li>
                <li className="business__current-address">{business.zip}</li>
                <li>{business.phone}</li>
              </ul>
            </div>

            <div className="business__show-images row">
              <img
                className="business__header-images"
                src={ window.assets.oysters }
                />
              <img
                className="business__header-images"
                src={ window.assets.steak }
                />
              <img
                className="business__header-images"
                src={ window.assets.soup }
                />
            </div>
          </div>

          <div className="business__show-reviews">
            <div className="reviews__container-box">

              <div className="reviews__container-form">
                <form>
                  <span className="business__review-rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                  </span>

                  <label>Your Review</label>
                  <textarea />
                </form>
              </div>

              <div className="reviews__container-reviews">
                <div className="business__review-user">
                  name

                </div>

                <div className="business__review-text">
                  rating
                  date
                  picture
                  review
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BusinessPageShow);
