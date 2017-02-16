import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';
import BusinessPage from './business_page';

const mapStateToProps = ({ businesses }, ownProps) => {
  let businessId = ownProps.params.id;
  return ({
    businesses: businesses,
    errors: businesses.errors,
    businessId
  })
}

const mapDispatchToProps = (dispatch, { location }) => {
  return ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessPage);
