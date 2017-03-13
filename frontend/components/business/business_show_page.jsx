import React from 'react';
import { Link, withRouter } from 'react-router';
import BusinessShowReview from './reviews/business_show_reviews';
import BusinessMap from '../map/business_map';

class BusinessPageShow extends React.Component{
  constructor(props) {
    super(props)

    this.renderBusinessImgs = this.renderBusinessImgs.bind(this);
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

  renderBusinessImgs(business) {
    if (business.reviews[0]) {
      return(
        <div className="business__show-images row">
          <section>
            <img
              className="business__header-images"
              src={business.reviews[0].image_url}
              />
          </section>
          <section>
            <img
              className="business__header-images active"
              src={business.reviews[1].image_url}
              />
          </section>
          <section>
            <img
              className="business__header-images"
              src={business.reviews[2].image_url}
              />
          </section>
        </div>
      )
    }
  };


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
                <button onClick={() => window.scrollTo(0,600)}>⭐ Write a Review</button>
            </div>
          </div>

          <div className="business__map-img-box row">
            <div className="business__map">
              <BusinessMap
                results={[this.props.business]}
              />

              <ul className="business__current-info">
                <li className="business__current-address">{business.street}</li>
                <li className="business__current-address">{business.city}</li>
                <li className="business__current-address">{business.state}</li>
                <li className="business__current-address">{business.zip}</li>
                <li>{business.phone}</li>
              </ul>
            </div>

              { this.renderBusinessImgs(business) }
          </div>

          <div className="business__show-reviews-container">
            <div className="reviews__container-box">

              <div className="reviews__container-reviews">
                  <BusinessShowReview
                    reviews={business.reviews}
                    createReview={this.props.createReview}
                    currentUser={this.props.currentUser}
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
