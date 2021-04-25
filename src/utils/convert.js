import getCurrency from './getCurrency';
import {currenciesList} from './constants';

const convert = async (currencyFrom) => {
  const rates = {};
  for (const currencyTo of currenciesList) {
    const exchangeCode = `${currencyFrom}_${currencyTo}`;
    if (currencyTo === currencyFrom) continue;
    try {
      await getCurrency(currencyFrom, currencyTo)
          .then((data) => rates[currencyTo] = data.data[exchangeCode]);
    } catch (e) {
      throw e;
    }
  }
  return rates;
};

export default convert;
