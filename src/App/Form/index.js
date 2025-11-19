import React, { useState } from 'react';
import { currencies } from "../currencies";
import { Result } from "./Result";
import { FormInclusion, FormTitle, FormField, FormButton } from "./styled";

export const Form = ({ calculateResult, result }) => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <>
            <FormInclusion>
                Policz wartość:
            </FormInclusion>

            <FormTitle>Podaj kwotę do przeliczenia w PLN</FormTitle>

            <form onSubmit={onFormSubmit}>
                <FormField
                    value={amount}
                    type="number"
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę: "
                    required
                    step="0.01"
                />

                <FormField
                    as="select"
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
                </FormField>
                <FormButton>Przelicz</FormButton>

                <FormInclusion>
                    <div>
                        Kwota wynosi:
                    </div>
                </FormInclusion>
                <Result result={result} />
            </form>
        </>
    )
};