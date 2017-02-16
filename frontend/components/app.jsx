import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
// props.children are content between opening and closing tag

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
