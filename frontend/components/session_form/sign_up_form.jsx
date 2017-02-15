import React from 'react';

const SignUpForm = (props) => {
  return (

    <form onSubmit={props.handleSubmit} className="login-form-box sign_up">

      <label> First Name
        <input
          type="text"
          className={props.state}
          value={props.state.f_name}
          onChange={props.update('f_name')}
        />
      </label>

      <label> Last Name
        <input
          type="text"
          key={props.state}
          value={props.state.l_name}
          onChange={props.update('l_name')}
        />
      </label>

      <label> Email
        <input
          type="text"
          key={props.state}
          value={props.state.email}
          onChange={props.update('email')}
        />
      </label>

      <label> Zip Code
        <input
          type="text"
          key={props.state}
          value={props.state.zip}
          onChange={props.update('zip')}
        />
      </label>

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

      <input type="submit" value="Sign Up"/>
    </form>
  )
};

export default SignUpForm;
