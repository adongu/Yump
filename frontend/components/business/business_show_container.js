import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import BusinessShowPage from './business_show_page';

const mapStateToProps = (state, ownProps) => {
  console.log("MapState", state);

  let reviews = state.busssiness.currentBusiness.reviews
  if (reviews) {
    numReviews = reviews.length;

  }
  let businessId = ownProps.params.id;
  return ({
    business: state.businesses.currentBusiness,
    errors: state.businesses.errors,
    businessId,

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
