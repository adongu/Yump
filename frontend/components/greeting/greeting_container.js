import { connect } from 'react-redux';
import Greeting from './greeting'
import { logout } from '../../actions/session_actions';

// state is { session } like in reducer
const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
