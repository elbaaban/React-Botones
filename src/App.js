// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './conponents/Navbar'; 
import Main2 from './conponents/main2';
  
import Main1 from './conponents/main1';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/main1" element={<Main1 />} />
          <Route path="/main2" element={<Main2 />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
