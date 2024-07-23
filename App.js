
import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState({ num1: null, num2: null });

  const generateRandomNumbers = () => {
    const num1 = Math.floor(Math.random() * 1001);
    const num2 = Math.floor(Math.random() * 1001);
    setNumbers({ num1, num2 });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number Generator</h1>
        <button onClick={generateRandomNumbers}>Generate Numbers</button>
        {numbers.num1 !== null && numbers.num2 !== null && (
          <div>
            <p>Number 1: {numbers.num1}</p>
            <p>Number 2: {numbers.num2}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
