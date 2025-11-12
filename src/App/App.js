import React, { useState, useEffect, useRef } from 'react';
import { Form } from "./Form";
import { currencies } from "./currencies";
import { Clock } from "./Clock";
import { Header } from "./Header";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <div className="App">
      <Header
        title="Zamiana walut"
      />
      <Clock />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;
