import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Works from './components/Works/Works.jsx';
import Contact from './components/Contact/Contact.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
