import { useState } from 'react';
import { useRatesData } from "../useRatesData";
import { Result } from "./Result";
import { FormInclusion, FormTitle, FormField, FormButton, Loading, Failure } from "./styled";

export const Form = () => {

    const ratesData = useRatesData();
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState();
    const [result, setResult] = useState(
        {
            sourceAmount: 1,
            targetAmount: 0.24,
            currency: "EUR"
        });
    

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

const currencyDay = ratesData.date;

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
                                    {Object.keys(ratesData.rates).map(((currency) => (
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
                                <p>Dane na temat kursów walut pochodzą z dnia: {currencyDay}</p>
                            </form>
                        </>
                        )
                )
            }
        </>
    )
};