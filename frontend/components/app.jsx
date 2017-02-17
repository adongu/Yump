import React from 'react';
import HomePageContainer from "./home_page/home_page_container";

// props.children are content between opening and closing tag

const App = ({ children }) => (

  <div>
    <HomePageContainer />
    { children }
  </div>
);

export default App;
