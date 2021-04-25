import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import {makeStyles, createStyles} from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import About from './About';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) =>
  createStyles({
    countryImage: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
  }),
);

const CountryData = () => {
  const classes = useStyles();
  const countryData = useSelector((state) => state.country.country);

  return (
    <Container maxWidth='lg'>
      <Typography variant='h2' component='h1' align='center'>
        {countryData.name}
      </Typography>
      <img
        src={countryData.imageUrl}
        alt={countryData.name}
        className={classes.countryImage}
      />
      <About countryData={countryData} />

    </Container>
  );
};

export default CountryData;

