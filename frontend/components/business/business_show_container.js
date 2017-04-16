import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { createReview, deleteReview, clearErrors } from '../../actions/review_actions';
import BusinessShowPage from './business_show_page';

const mapStateToProps = ({ session, businesses }) => {
  let reviews = [];
  if (businesses.currentBusiness.reviews) {
    reviews = businesses.currentBusiness.reviews;
  }
  return ({
    business: businesses.currentBusiness,
    errors: businesses.errors,
    reviews: businesses.currentBusiness.reviews,
    currentUser: session.currentUser
  })
}

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    createReview: (formData) => dispatch(createReview(formData)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    clearErrors: () => dispatch(clearErrors())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShowPage)
