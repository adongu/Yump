import React from 'react';
import App from './app';
import { Provider } from "react-redux";
//  react router accepts store and renders routes wrapped by Provider
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business/business_show_container';
import SearchResultContainer from './search/search_result_container';

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
      <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ BusinessIndexContainer } />
          <Route path="/businesses" component={ BusinessIndexContainer } />
          <Route path="/businesses/:id" component={ BusinessShowContainer } />
          <Route path="/searches" component={ SearchResultContainer } />
        </Route>
        <Route path="/login" component={ SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  )
};

export default Root;
