import { useState } from 'react';
import { currencies, useRatesData } from "../currencies";
import { Result } from "./Result";
import { FormInclusion, FormTitle, FormField, FormButton, Loading, Failure } from "./styled";

export const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };
    return (
        <>
            <FormInclusion>
                Policz wartość:
            </FormInclusion>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Proszę czekać, <b>Pobieram aktualne kursy z Europejskiego Banku Centralnego</b>
                    </Loading>
                )
                : (
                    ratesData.state === "error"
                        ? (
                            <Failure>
                                Ups, coś poczło nie tak. Sprawdź czy sąsiad nie urwał światłowodu
                            </Failure>
                        ) :
                        (<>
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
                                            key={currency}
                                            value={currency}>
                                            {currency}
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
                )
            }
        </>
    )
};