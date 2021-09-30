import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import  ProgressContextProvider from './contexts/ProgressContext';
import  ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
