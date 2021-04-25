import React, {useEffect} from 'react';
import Header from '../components/header/Header';
import {useSelector, useDispatch} from 'react-redux';
// import {getCountryDataByLang} from '../service/countries';
import {fetchCountry} from '../redux/countrySlice';
// import Footer from '../components/footer/Footer';
import CountryData from '../components/countryData/countryData';


const CountryPage = () => {
  const dispatch = useDispatch();
  const countryId = document.location.pathname.substr(1);
  const language = useSelector((state) => state.settings.language);
  const countryData = useSelector((state) => state.country.country);

  useEffect(() => {
    dispatch(fetchCountry({countryId, language}));
  }, [dispatch, language, countryId]);

  return (
    <>
      <Header />
      <CountryData countryData={countryData} />
      {/* <Footer /> */}
    </>
  );
};

export default CountryPage;
