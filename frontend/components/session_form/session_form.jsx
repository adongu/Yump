import React from 'react';
import { Link, withRouter } from "react-router";
import LogInForm from "./log_in_form";
import SignUpForm from "./sign_up_form";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      f_name: "",
      l_name: "",
      email: "",
      zip: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.redirectIfLogged = this.redirectIfLogged.bind(this)
    this.handleGuest = this.handleGuest.bind(this)
  }

  componentDidUpdate() {
    this.redirectIfLogged();
  }

  redirectIfLogged() {
    if (this.props.loggedIn) {
      this.props.router.push("/")
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( () => {this.redirectIfLogged()});
  }

  handleGuest(e) {
    e.preventDefault();
    const guest = {username: "Foodie", password: "cupcake"};
    this.props.login(guest).then( () => {this.redirectIfLogged()});
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign Up Instead</Link>;
    } else {
      return <Link to="/login">Log In Instead</Link>;
    }
  }

  renderForm() {
    if (this.props.formType === "login") {
      return (
        <LogInForm
          handleSubmit={this.handleSubmit}
          update={this.update}
          state={this.state}
          navLink={this.navLink}
        />);
    } else {
      return (
        <SignUpForm
          handleSubmit={this.handleSubmit}
          update={this.update}
          state={this.state}
          navLink={this.navLink}
        />);
    }
  }

  render() {

    const title = (this.props.formType === "login") ? "Log In" : "Sign Up";
    return(
      <div className="login-form-box">
        <button onClick={this.handleGuest}>Login as Guest</button>
        Welcome to Yump!
        Please {this.props.formType} or {this.navLink()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withRouter(SessionForm)