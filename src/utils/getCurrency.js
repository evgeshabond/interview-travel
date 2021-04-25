import axios from 'axios';
import {currencyKey} from './constants';

const getCurrency = async (currencyFrom, currencyTo) => {
  const exchangeCode = `${currencyFrom}_${currencyTo}`;
  const url = `https://free.currconv.com/api/v7/convert?q=${exchangeCode}&compact=ultra&apiKey=${currencyKey}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (e) {
    throw e;
  }
};

export default getCurrency;
