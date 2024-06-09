import React, { createContext, useState, useEffect } from 'react';
import useDarkSide from '../themeChanger/useDarkSide.js';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(true);

  useEffect(() => {
    setTheme(darkSide ? 'dark' : 'light');
  }, [darkSide, setTheme]);

  const toggleTheme = () => {
    setDarkSide(!darkSide);
  };

  return (
    <ThemeContext.Provider value={{ darkSide, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
