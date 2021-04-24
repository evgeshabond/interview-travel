import React from 'react';
import Header from '../components/header/Header';
import CountryList from '../components/countryList/CountryList';
import Footer from '../components/footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <CountryList />
      <Footer />
    </>
  );
};

export default MainPage;
