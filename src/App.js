// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Loginpage';
import Table from './table'; // Create a component for your homepage

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/table" element={<Table/>}/>
        </Routes>
    </Router>
  );
};

export default App;
