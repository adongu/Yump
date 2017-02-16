import { connect } from 'react-redux';
import { showBusinesses, showBusiness } from '../../actions/business_actions';
import BusinessPage from './business_page';

const mapStateToProps = ({ businesses }) => ({
  businesses: businesses.business,
  errors: businesses.errors
});

const mapDispatchToProps = (dispatch) => ({
  showBusinesses: () => dispatch(showBusinesses()),
  showBusiness: (id) => dispatch(showBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessPage);
