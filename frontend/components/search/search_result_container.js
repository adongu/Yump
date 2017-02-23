import { connect } from "react-redux";
import SearchResults from './search_results';
import { fetchResults } from '../../actions/search_actions';

const mapStateToProps = ({results}) => {
  // console.log("Hit container", state)
    let businesses = []
    if (results) {
      businesses = results
      console.log("hit results", results)
    }
  return {
    results: businesses
  }
}

const mapDispatchToProps = (dispatch, {location}) => {
  return {
    fetchResults: () => dispatch(fetchResults())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
