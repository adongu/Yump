import React from 'react';
import { Link, hashHistory } from 'react-router';

class BusinessShowReview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rating: 0,
      review: "",
      imageFile: null,
      imageUrl: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.renderDeleteBtn = this.renderDeleteBtn.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.reviews.length !== this.props.reviews.length) {
      this.setState({
        rating: 0,
        review: "",
        imageFile: null,
        imageUrl: ""
      });
    }
  }

  renderReviewStars() {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((ele)=>{
      return (
        <span className={ele <= this.state.rating ? 'active_star' : 'no_star'} onClick={()=>{this.setState({rating: ele})}} key={ele}>☆</span>
      )
    })
  }
  renderStars(rating) {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((ele)=>{
      return (
        <span className={ele <= rating ? 'active_star' : 'no_star'} key={ele}>☆</span>
      )
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      let formData = new FormData();
      formData.append("review[rating]", this.state.rating);
      formData.append("review[review]", this.state.review);
      formData.append("review[business_id]", this.props.businessId);
      if (this.state.imageFile) {
        formData.append("review[image]", this.state.imageFile);
      }
      if(!this.props.createReview(formData)) {
        this.setState({
          rating: this.state.rating,
          review: this.state.review,
          imageUrl: this.state.imageFile
        })
      }

    } else {
      hashHistory.push({
        pathname:`/login`
      })
    }
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result
      });
    }.bind(this)

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateReview(e) {
    this.setState({
      review: e.target.value
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  updateRating (e) {
    this.setState({
      rating: e.target.value
    });
  }

  renderReviews(review) {
    let {reviewer} = review
    return (
      <div className="reviews__container">
        <div className="reviews__container-left">
          <ul className="reviews__container-left-info">
            <li className="reviews__reviewer-name">
              <span>{reviewer.f_name} </span>
              <span>{reviewer.l_name}.</span>
            </li>
            <li>Zip: {reviewer.zip}</li>
            <div className="reviews__body-images">
              <img src={review.image_url} />
            </div>
          </ul>
        </div>

        <div className="reviews__container-right">

          <div className="reviews__body-header">
              <span className="reviews__ratings">{this.renderStars(review.rating)}</span>
              <span className="reviews__date">{review.created_at}</span>
          </div>

          <div className="reviews__body-text">
            {review.review}
          </div>

        </div>

      </div>
    )
  }

  renderDeleteBtn(review) {
    if (this.props.currentUser && (this.props.currentUser.id === review.reviewer.id)) {
      return (
        <button className="business__review-delete"  onClick={()=>this.props.deleteReview(review)}>Delete Review</button>
      )
    }
  }

  renderErrors() {
    return(
      <div className="review__errors-box">
        <ul className="review__errors">
          {
            this.props.errors.map((error, i) => {
              return (
                <li key={`review_error-${i}`}>
                  {error}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  };

  render (){
    let submitText = this.props.currentUser ? "Post Review" : "Sign in to Review";
    return (
      <div className="business-reviews-box">

        <div className="business__reviews-container">
          <div className="business__reviews-form-container">
            <form className="business__reviews-form">
              <div className="business__reviews-form-left">
                <div className="business__reviews-rating-container">
                    {this.renderReviewStars()}
                </div>
                <div className="business__reviews-review-container">
                  <label className="business__reviews-upload-label" >Your Review</label>
                  <div>{this.renderErrors()}</div>
                  <textarea className="business__reviews-review" value={this.state.review} onChange={this.update("review")} />
                </div>
              </div>
              <div className="business__reviews-buttons">
                <button className="business__reviews-submit-btn" onClick={this.handleSubmit}>{submitText}</button>
                <input className="business__reviews-upload-input" type="file" onChange={this.updateFile} />
              </div>
            </form>
            <div className="business__reviews-form-right">
              <img className="review__img" src={this.state.image_url}/>
            </div>
          </div>
        </div>

        <div className="business__reviews-all">
          {this.props.reviews.map( (review) => {
            return (
                <div className="business__show-reviews" key={`review-${review.id}`}>
                  {this.renderReviews(review)}

                  <div className="delete__review">
                    {this.renderDeleteBtn(review)}
                  </div>

              </div>
            )
          })}
        </div>
      </div>
    )
  }
}



export default BusinessShowReview;
