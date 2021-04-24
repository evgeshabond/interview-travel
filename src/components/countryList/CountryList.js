import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCountries} from '../../redux/countriesSlice';

const CountryList = () => {
  const language = useSelector((state) => state.settings.language);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries(language));
  }, [language, dispatch]);

  return (
    <p>This is country list</p>
  );
};

export default CountryList;
