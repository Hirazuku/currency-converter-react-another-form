import axios from "axios";

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
          (async () => {
              try {
                  const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_y6Z8Gy5fV32AnKdx5ZHcSuYdrReJqENCTA5T9lFY&currencies=EUR%2CUSD%2CCAD&base_currency=PLN");
                  console.log(response.data);
              }
              catch (error) {
                  console.error(error);
              }
          })();
  
          console.log(Object.keys("CAD"));
      }