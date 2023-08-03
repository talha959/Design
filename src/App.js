// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import First from './component/First';
// import Second from './component/Second';
// import Third from './component/Third';
// import Fourth from './component/Fourth';
// import Fifth from './component/Fifth';
import Compare from './Pages/Compare';
// import Home from './Pages/Home';
import Phones from './Pages/Phones';
import Main from './Main';
import Home from './Pages/Home';
import Findout from './Pages/Findout'
import Explore from './Pages/Explore';
import Error from './Pages/Error';
const App = () => {
  return (
    <div>
      {/* <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Phones" element={<Phones />} />
        <Route path="/Findout" element={<Findout />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
};

export default App;