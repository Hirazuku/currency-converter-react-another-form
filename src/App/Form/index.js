import "./style.css";
import React, { useState } from 'react';
import { currencies } from "../currencies";
import { Result } from "./Result";


export const Form = ({ calculateResult, result }) => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <>
            <div className="form__grid form__title form--biggerGap">
                Policz wartość:
            </div>

            <p className="form__section--title">Podaj kwotę do przeliczenia w PLN</p>

            <form onSubmit={onFormSubmit}>
                <input
                    className="form__field"
                    type="number"
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę: " />
                <select
                    className="form__select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map((currency => (
                            <option
                            key={currency.short}
                            value={currency.short}>
                                {currency.name}
                            </option>
                    )))}
                </select>
                <button className="button">Przelicz</button>
            </form>

            <>
                <section className="form__title form--biggerGap">
                    <div className="form__grid">
                        Kwota wynosi:
                    </div></section>
                    <Result result={result}/>
            </>
        </>
    )

};