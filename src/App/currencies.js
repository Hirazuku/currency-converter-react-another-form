import axios from "axios";
import { useEffect, useState } from "react";

export const currencies = [
    {
        short: "EUR",
        name: "Euro",
        rate: "4.9384",
    },
    {
        short: "JPY",
        name: "Jen",
        rate: "0.024",
    },
    {
        short: "GBP",
        name: "Funt Brytyjski",
        rate: "4.79",
    },
];

export const newCurrencies = async () => {
    {
        try {
            console.log("Elo");
            const response = await axios.get("https//api.exchangeratesapi.io/v1/latest?access_key=8199ecc54444644dd566d6e29654dc8a&symbols=USD,AUD,CAD,PLN,MXN&format=1");
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    };
}

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });


    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get("https//api.exchangeratesapi.io/v1/latest?access_key=8199ecc54444644dd566d6e29654dc8a&symbols=USD,AUD,CAD,PLN,MXN&format=1");
                
                const { rates, date } = await response.data;

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });

            }
            catch {
                setRatesData({
                    state: "error",
                });
            }
        }
        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
}