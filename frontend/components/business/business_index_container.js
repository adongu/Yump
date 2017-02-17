import { connect } from "react-redux";
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';
import BusinessIndexPage from './business_index_page'

const mapStateToProps = ({ business }) => {
  return ({
    business: business.businesses,
    errors: business.errors
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: () => dispatch(fetchBusiness())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndexPage);
