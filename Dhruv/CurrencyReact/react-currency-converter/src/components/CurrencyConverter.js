// src/components/CurrencyConverter.js
import React, { useState } from 'react';
import './CurrencyConverter.css'; // Import the styles

const CurrencyConverter = () => {
  const [dollars, setDollars] = useState('');
  const [rupees, setRupees] = useState('');
  const exchangeRate = 75; // Hard-coded exchange rate: 1 USD = 75 INR

  const handleDollarChange = (event) => {
    const amountInDollars = event.target.value;
    setDollars(amountInDollars);
    const amountInRupees = amountInDollars * exchangeRate;
    setRupees(amountInRupees.toFixed(2));
  };

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="input-container">
        <label>
          Dollars:
          <input
            type="number"
            value={dollars}
            onChange={handleDollarChange}
            placeholder="Enter amount in dollars"
          />
        </label>
      </div>
      <p>Exchange Rate: 1 USD = {exchangeRate} INR</p>
      <p className="result">Rupees: {rupees} INR</p>
    </div>
  );
};

export default CurrencyConverter;
