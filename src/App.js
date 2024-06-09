import './App.css';
import React from 'react';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Works from './components/Works/Works.jsx';
import Contact from './components/Contact/Contact.jsx';
import { ThemeProvider } from './components/themeChanger/ThemeContext.js';
function App() {
  return (
    <ThemeProvider>
      <div className="App grid bg-mainColor-1 dark:bg-mainDark-1">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
