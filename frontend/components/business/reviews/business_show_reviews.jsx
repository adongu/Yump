import React from 'react';
import { Link } from 'react-router';

class BusinessShowReview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rating: null,
      review: "",
      imageFile: null,
      imageUrl: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateFile = this.updateFile.bind(this)
  }

  componentWillReceiveProps(newProps) {

  }

  renderStars() {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((ele)=>{
      return (
        <span className={ele <= this.state.rating ? 'active_star' : ''} onClick={()=>{this.setState({rating: ele})}} key={ele}>☆</span>
      )
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("review[rating]", this.state.rating);
    formData.append("review[review]", this.state.review);
    formData.append("review[image]", this.state.imageFile);
    console.log("hit end state", this.state)
    this.props.createReview(formData);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
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
    console.log(this);
    let {reviewer} = review
    return (
      <div className="reviews__container">
        <div className="reviews__container-left">
          <ul>
            <li className="reviews__reviewer-name">
              <span>{reviewer.f_name}</span>
              <span>{reviewer.l_name}</span>
            </li>
            <li>
              {reviewer.zip}
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

  render (){
    return (
      <ul className="business__reviews-container">
        <li>
          <div className="reviews__container-form">
            <form>
              <span className="business__review-rating">
                {this.renderStars()}
              </span>

              <label>Your Review</label>
              <textarea className="bussiness__reviews-review" onChange={this.update("review")} />
              <input type="file" onChange={this.updateFile}/>
              <button onClick={this.handleSubmit}>Post Review</button>
              <img src={this.state.imageUrl}/>
            </form>
          </div>
        </li>

        {this.props.reviews.map( (review) => {
          return (
            <li className="business__show-reviews" key={`review-${review.id}`}>
              {this.renderReviews(review)}
            </li>
          )
        })}
      </ul>
    )
  }
}



export default BusinessShowReview;
