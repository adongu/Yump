import React from 'react';
import App from './app';
import { Provider } from "react-redux";
//  react router accepts store and renders routes wrapped by Provider
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';


// Route tells router to render App component at root url '/'
const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }/>

        <Route path="/login" component={ SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
      </Router>
    </Provider>
  )
};

export default Root;
