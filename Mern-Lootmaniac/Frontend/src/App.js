import React, { useState } from 'react';
import ExchangeForm from './components/ExchangeForm';
import ExchangeRate from './components/ExchangeRate';
import ExchangeResult from './components/ExchangeResult';

function App() {
  const App = () => {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState(null);
  };
  return (
    <div>
      <h2>Money Exchange App</h2>
      <ExchangeForm handleExchange={handleExchange} />
      {exchangeRate && <ExchangeRate rate={exchangeRate} />}
      {convertedAmount && (
        <ExchangeResult
          amount={amount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          convertedAmount={convertedAmount}
        />
      )}
    </div>
  );
  
}

export default App;
