import { connect } from "react-redux";
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';
import BusinessIndexPage from './business_index_page'

const mapStateToProps = ({ businesses }) => {
  return ({
    businesses: Object.keys(businesses.businesses).map( id => businesses.businesses[id]),
    errors: businesses.errors
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
