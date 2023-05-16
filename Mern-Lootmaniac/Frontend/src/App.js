import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleTransfer = () => {
    if (amount <= 0) {
      console.log('Invalid amount');
      return;
    }
  
    if (recipient.trim() === '') {
      console.log('Recipient cannot be empty');
      return;
    }
  
    fetch('/api/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, recipient }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Transfer successful');
        // Do something with the response data if needed
      })
      .catch((error) => {
        console.log('Transfer failed:', error);
      });
    console.log(`Transferring ${amount} to ${recipient}`);
  };

  return (
    <div>
      <h1>Money Transfer App</h1>
      <form>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        <label>
          Recipient:
          <input type="text" value={recipient} onChange={handleRecipientChange} />
        </label>
        <br />
        <button type="button" onClick={handleTransfer}>
          Transfer Money
        </button>
      </form>
    </div>
  );
}

export default App;
