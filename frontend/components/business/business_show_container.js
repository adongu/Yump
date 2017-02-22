import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { createReview } from '../../actions/review_actions';
import BusinessShowPage from './business_show_page';

const mapStateToProps = ({ businesses }, ownProps) => {
  let businessId;
  let reviews = [];
  if (businesses.currentBusiness.reviews) {
    reviews = businesses.currentBusiness.reviews;
    businessId = businesses.currentBusiness.id;
  }
  return ({
    business: businesses.currentBusiness,
    errors: businesses.errors,
    reviews: reviews,
    businessId
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
