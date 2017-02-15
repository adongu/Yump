import React from 'react';
import App from './app';
import { Provider } from "react-redux";
//  react router accepts store and renders routes wrapped by Provider
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


// Route tells router to render App component at root url '/'
const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>
);

export default Root;
