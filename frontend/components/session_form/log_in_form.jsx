import React from 'react';

const LogInForm = (props) => {
  return (
    <form className="login-form-box log_in">
      <div>
        <input className="form__login-username"
          placeholder="Username"
          type="text"
          key={props.state}
          value={props.state.username}
          onChange={props.update('username')}
        />
      </div>

      <div>
        <input className="form__login-password"
          placeholder="Password"
          type="password"
          key={props.state}
          value={props.state.password}
          onChange={props.update('password')}
        />
      </div>

      <button className="login__submit-login" onClick={props.handleSubmit}>Log In</button>
    </form>
  )
};

export default LogInForm;
