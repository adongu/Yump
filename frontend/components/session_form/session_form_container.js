import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  // let errors = [];
  // if (session) {
  //   let errors = session.errors
  // }
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
  }
// ownProps has location key
const mapDispatchToProps = ( dispatch, newProps ) => {
  const formType = newProps.location.pathname.slice(1);
  const processForm =  (formType === "login") ? login : signup;
  return ({
    processForm:  user => dispatch(processForm(user)).then(() => dispatch(clearErrors())),
    login: (user) => dispatch(login(user)),
    formType,
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
