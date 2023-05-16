import React from 'react';

function ExchangeForm() {
    const handleExchange = async (amount, fromCurrency, toCurrency) => {
      try {
        
        const response = await fetch(
          `https://api.example.com/exchange?from=${fromCurrency}&to=${toCurrency}`
        );
    
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rate');
        }
    
        const data = await response.json();
    
        const exchangeRate = data.rate;
        const convertedAmount = amount * exchangeRate;
    
        setExchangeRate(exchangeRate);
        setConvertedAmount(convertedAmount);
      } catch (error) {
        console.error(error);
      }
    };
    
  }
  
export default ExchangeRate;
