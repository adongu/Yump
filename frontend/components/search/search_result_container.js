import { connect } from "react-redux";
import SearchResults from './search_results';
import { fetchResults } from '../../actions/search_actions';

const mapStateToProps = ({results}) => {

  return {
    results: results.results,
    // location: location
  }
}

const mapDispatchToProps = (dispatch, {location}) => {
  return {
    fetchResults: (queryString) => dispatch(fetchResults(queryString))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
