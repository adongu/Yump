import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import BusinessShowPage from './business_show_page';

const mapStateToProps = ({ businesses }, ownProps) => {
  let businessId = ownProps.params.id;
  let reviewsArray;
  let reviewers;
  if (businesses.currentBusiness.reviews) {
    reviewsArray = businesses.currentBusiness.reviews.reverse();
    if(business.currentBusiness.reviewers) {
      reviewers = businesses.currentBusiness.reviewers;
    }
  }

  return ({
    business: businesses.currentBusiness,
    errors: businesses.errors,
    reviews: reviewsArray,
    reviewers: reviewers,
    businessId
  })
}

const mapDispatchToProps = (dispatch, { location }) => {
  return ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShowPage)
