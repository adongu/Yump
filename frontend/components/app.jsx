import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
// props.children are content between opening and closing tag

const App = ({ children }) => (
  <div>
    <h1> Yump </h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
