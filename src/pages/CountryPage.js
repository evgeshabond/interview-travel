import React, {useEffect} from 'react';
import Header from '../components/header/Header';
import {useSelector, useDispatch} from 'react-redux';
// import {getCountryDataByLang} from '../service/countries';
import {fetchCountry} from '../redux/countrySlice';

const CountryPage = () => {
  const dispatch = useDispatch();
  const countryId = document.location.pathname.substr(1);
  const language = useSelector((state) => state.settings.language);

  useEffect(() => {
    dispatch(fetchCountry({countryId, language}));
  }, [dispatch, language, countryId]);

  return (
    <>
      <Header />
    </>
  );
};

export default CountryPage;
