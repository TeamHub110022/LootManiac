import React, { useState } from 'react';

const ExchangeForm = ({ handleExchange }) => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleExchange(amount, fromCurrency, toCurrency);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        {/* Add more currency options here */}
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        {/* Add more currency options here */}
      </select>
      <button type="submit">Convert</button>
    </form>
  );
};

export default ExchangeForm;
