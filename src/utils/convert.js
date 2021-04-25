import getCurrency from './getCurrency';
import {currenciesList} from './constants';

const convert = async (currencyFrom) => {
  if (!currencyFrom) return null;
  const rates = {};
  for (const currencyTo of currenciesList) {
    const exchangeCode = `${currencyFrom}_${currencyTo}`;
    if (currencyTo === currencyFrom) continue;
    try {
      await getCurrency(currencyFrom, currencyTo)
          .then((data) => rates[currencyTo] = data.data[exchangeCode]);
    } catch (e) {
      return null;
    }
  }
  return rates;
};

export default convert;
