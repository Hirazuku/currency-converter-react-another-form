import React, { useState } from 'react';
import { currencies } from "../currencies";
import { Result } from "./Result";
import { StyledForm, FormTitle, FormField, FormSelect, FormButton } from "./styled";

export const Form = ({ calculateResult, result }) => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <>
            <StyledForm>
                Policz wartość:
            </StyledForm>

            <FormTitle>Podaj kwotę do przeliczenia w PLN</FormTitle>

            <form onSubmit={onFormSubmit}>
                <FormField
                    type="number"
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę: " />
                <FormSelect
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
                </FormSelect>
                <FormButton>Przelicz</FormButton>
            </form>

            <>
                <StyledForm>
                    <div>
                        Kwota wynosi:
                    </div>
                </StyledForm>
                <Result result={result} />
            </>
        </>
    )

};