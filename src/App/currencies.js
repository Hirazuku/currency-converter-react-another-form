import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get("https://api.fxratesapi.com/latest?base=pln");
                
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