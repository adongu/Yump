import { connect } from 'react-redux';
import HomePage from './home_page'
import { logout } from '../../actions/session_actions';

// state is { session } like in reducer
const mapStateToProps = ({ session }, ownProps) => {
  let pageType = ownProps.pageType || "show";
  console.log(pageType)
  return {
    currentUser: session.currentUser,
    pageType
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
