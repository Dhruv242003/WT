// src/App.js
import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css'; // Import global styles

const App = () => {
  return (
    <div className="app">
      <CurrencyConverter />
    </div>
  );
};

export default App;
