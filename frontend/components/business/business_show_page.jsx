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
      <div className="business__show">
        <div className="business__current-box">
          <div className="business__current-review">
            <li>{business.price}</li>
            <li>{business.review_count}</li>
            <li>{business.name}</li>
          </div>
          <ul className="business__current-info">

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
            <img
              className="home__header-bar-images"
              src={ window.assets.oysters }
              />
          </div>
          <img
            className="home__header-bar-images"
            src={ window.assets.steak }
            />
          <img
            className="home__header-bar-images"
            src={ window.assets.soup }
            />
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
