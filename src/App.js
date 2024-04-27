import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />

    </div>
  );
}

export default App;
