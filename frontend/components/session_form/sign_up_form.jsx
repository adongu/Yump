import React from 'react';

const SignUpForm = (props) => {
  return (

    <form className="login-form-box sign_up">

      <div className="row form__first-name-box">
        <div className="form__first-name">
          <input
            className="form__first-name-input"
            placeholder="First Name"
            type="text"
            className={props.state}
            value={props.state.f_name}
            onChange={props.update('f_name')}
          />
        </div>

        <div className="form__last-name">
          <input
            className="form__last-name-input"
            placeholder="Last Name"
            type="text"
            key={props.state}
            value={props.state.l_name}
            onChange={props.update('l_name')}
          />
        </div>
      </div>

      <div>
        <input
          className="form__email"
          placeholder="Email"
          type="text"
          key={props.state}
          value={props.state.email}
          onChange={props.update('email')}
        />
      </div>

      <div>
        <input
          className="form__username"
          placeholder="Username"
          type="text"
          key={props.state}
          value={props.state.username}
          onChange={props.update('username')}
          />
      </div>

      <div>
        <input
          className="form__password"
          placeholder="Password"
          type="password"
          key={props.state}
          value={props.state.password}
          onChange={props.update('password')}
          />
      </div>

      <div>
        <input
          className="form__zip-code"
          placeholder="Zip Code"
          type="text"
          key={props.state}
          value={props.state.zip}
          onChange={props.update('zip')}
        />
      </div>
      <button onClick={props.handleSubmit}>Sign Up</button>
    </form>
  )
};

export default SignUpForm;
