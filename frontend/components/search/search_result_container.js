import { connect } from "react-redux";
import SearchResults from './search_results';
import { fetchResults } from '../../actions/search_actions';

const mapStateToProps = ({results}) => {
    let businesses = []
    if (results.length > 0) {
      businesses = results
      console.log("hit results", businesses)
    }
  return {
    results: businesses
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
