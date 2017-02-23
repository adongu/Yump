import { connect } from "react-redux";
import SearchResults from './search_results';
import { fetchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, {location}) => {
  return {
    fetchResults: () => dispatch(fetchResults()),
    query: location.query
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
