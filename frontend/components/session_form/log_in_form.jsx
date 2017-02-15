import React from 'react';

const LogInForm = (props) => {
  return (

    <form onSubmit={props.handleSubmit} className="login-form-box log_in">
      <label> Username
        <input
          type="text"
          key={props.state}
          value={props.state.username}
          onChange={props.update('username')}
        />
      </label>

      <label> Password
        <input
          type="password"
          key={props.state}
          value={props.state.password}
          onChange={props.update('password')}
        />
      </label>

      <input type="submit" value="Log In"/>
    </form>
  )
};

export default LogInForm;
