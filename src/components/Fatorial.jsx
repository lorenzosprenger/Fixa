import React, { useState, useMemo } from 'react';

function FactorialComponent() {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  const calculateFactorial = useMemo(() => {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }, [number]);

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleCalculate = () => {
    setFactorial(calculateFactorial);
  };

  return (
    <div>
      <h1>UseMemo</h1>
      <input type="number" value={number} onChange={handleInputChange} />
      <button onClick={handleCalculate}>Calculate Factorial</button>
      <p>Factorial: {factorial}</p>
    </div>
  );
}

export default FactorialComponent;