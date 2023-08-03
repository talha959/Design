// Main.js
import React from 'react';
import './App.css';

import First from './component/First';
import Second from './component/Second';
import Third from './component/Third';
import Fourth from './component/Fourth';
import Fifth from './component/Fifth';
// import Compare from './Pages/Compare';
// import Home from './Pages/Home';
// import Phones from './Pages/Phones';

const Main = () => {
  return (
    <div>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      
    </div>
  );
};

export default Main;