import React from 'react';

const ExchangeResult = ({ amount, fromCurrency, toCurrency, convertedAmount }) => {
  return (
    <div>
      <h3>Result</h3>
      <p>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
    </div>
  );
};

export default ExchangeResult;
