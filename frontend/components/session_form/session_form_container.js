import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

// ownProps has location key
const mapDispatchToProps = ( dispatch, { location } ) => {
  const formType = location.pathname.slice(1);
  const processForm =  (formType === "login") ? login : signup;
  return ({
    processForm:  user => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
