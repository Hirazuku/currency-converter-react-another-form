import React, { useState, useEffect, useRef } from 'react';
import { Form } from "./Form";
import { currencies, newCurrencies } from "./currencies";
import { Clock } from "./Clock";
import { Header } from "./Header";
import { StyledApp } from "./styled";
import axios from "axios";

function App() {

  newCurrencies();

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
    <StyledApp>
      <Header
        title="Zamiana walut"
      />
      <Clock />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </StyledApp>
  );
}

export default App;
