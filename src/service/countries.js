import axios from 'axios';
import {baseUrl} from '../utils/constants';

const getCountriesByLang = async (language) => {
  const url = `${baseUrl}?lang=${language}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getCountryDataByLang = async (id, language = 'en') => {
  const url = `${baseUrl}/${id}?lang=${language}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export {getCountriesByLang, getCountryDataByLang};
