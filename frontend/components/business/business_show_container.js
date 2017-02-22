import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { createReview } from '../../actions/review_actions';
import BusinessShowPage from './business_show_page';

const mapStateToProps = ({ businesses }) => {
  let reviews = [];
  if (businesses.currentBusiness.reviews) {
    reviews = businesses.currentBusiness.reviews;
  }
  return ({
    business: businesses.currentBusiness,
    errors: businesses.errors,
    reviews: reviews
  })
}

const mapDispatchToProps = (dispatch, { location }) => {
  return ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    createReview: (formData) => dispatch(createReview(formData))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShowPage)
