import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Gestion from "./pages/Gestion";
import Types from "./pages/Types";

const Main = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Gestion />} />
        <Route path='/types' element={<Types />} >
        </Route>
      </Routes>
    </Router>
  );
}

export default Main;