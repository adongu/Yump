import { connect } from "react-redux";
import { fetchReviews, deleteReview, editReview } from '../../actions/business_actions';
import BusinessIndexPage from './business_index_page'

const mapStateToProps = (state) => {
  console.log("hitmapStatereview", state)
  return ({
    reviews: state.businesses.currentBusiness.reviews
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: () => dispatch(deleteReview()),
    deleteReview: () => dispatch(deleteReview())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndexPage);
