import React from 'react';
import { Link, withRouter } from 'react-router';
import BusinessShowReview from './reviews/business_show_reviews';

class BusinessPageShow extends React.Component{
// need createreview method
  constructor(props) {
    super(props)
    // this.state = {
    //   rating: null
    // }
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.params.id)
    // this.setState({reviews: this.props.reviews})
  };

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      this.props.fetchBusiness(newProps.params.id)
    }
  }

  renderStars(ratings) {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((ele)=>{
      return (
        <span className={ele <= ratings ? 'active_star' : 'no_star'} key={ele}>☆</span>
      )
    })
  }


  render () {
    let { business } = (this.props);
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
                  {this.renderStars(business.ratings)}
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
              <section>
                <img
                  className="business__header-images"
                  src={ window.assets.oysters }
                  />
              </section>
              <section>
                <img
                  className="business__header-images active"
                  src={ window.assets.steak }
                  />
              </section>
              <section>
              <img
                className="business__header-images"
                src={ window.assets.soup }
                />
              </section>
            </div>
          </div>

          <div className="business__show-reviews-container">
            <div className="reviews__container-box">

              <div className="reviews__container-reviews">
                  <BusinessShowReview
                    reviews={business.reviews}
                    createReview={this.props.createReview}
                    businessId={this.props.params.id}
                    fetchBusiness={this.props.fetchBusiness}
                    deleteReview={this.props.deleteReview}
                  />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessPageShow;
