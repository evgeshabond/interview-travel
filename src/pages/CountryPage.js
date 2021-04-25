import React, {useEffect} from 'react';
import Header from '../components/header/Header';
import {useSelector, useDispatch} from 'react-redux';
// import {getCountryDataByLang} from '../service/countries';
import {fetchCountry} from '../redux/countrySlice';
import Footer from '../components/footer/Footer';
import Country from '../components/country/Country';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      minHeight: '100vh',
      paddingBottom: '6rem',
    },
  }),
);

const CountryPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countryId = document.location.pathname.substr(1);
  const language = useSelector((state) => state.settings.language);

  useEffect(() => {
    dispatch(fetchCountry({countryId, language}));
  }, [dispatch, language, countryId]);

  return (
    <div className={classes.wrapper}>
      <Header />
      <Country />
      <Footer />
    </div>
  );
};

export default CountryPage;
