import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import BusinessShowPage from './business_show_page';

const mapStateToProps = ({ businesses }, ownProps) => {
  let businessId = ownProps.params.id;
  return ({
    business: businesses.currentBusiness,
    errors: businesses.errors,
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
