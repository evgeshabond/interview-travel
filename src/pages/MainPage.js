import React from 'react';
import Header from '../components/header/Header';
import CountryList from '../components/countryList/CountryList';
import Footer from '../components/footer/Footer';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      minHeight: '100vh',
      paddingBottom: '4rem',
    },
  }),
);

const MainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <CountryList />
      <Footer />
    </div>
  );
};

export default MainPage;
