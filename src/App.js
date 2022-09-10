import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import DetailedCourse from './Components/DetailedCourse';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/home' element={<Dashboard />} />
        <Route path='/home/:text' element={<Dashboard />} />
        <Route path='/course/:id' element={<DetailedCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
