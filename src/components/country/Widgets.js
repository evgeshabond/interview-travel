import React from 'react';
import Grid from '@material-ui/core/Grid';
import WeatherWidget from './WeatherWidget';
import CurrencyWidget from './CurrencyWidget';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    widgetsContainer: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

const Widgets = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      lg={3}
      md={3}
      xs={12}
      className={classes.widgetsContainer}>
      <Grid item lg={12} md={12} sm={5} xs={12}>
        <WeatherWidget />
      </Grid>
      <Grid item sm={1} />
      <Grid item lg={12} md={12} sm={5} xs={12} >
        <CurrencyWidget />
      </Grid>
      {/* <Currencies currency={countryData.currency}/> */}
    </Grid>
  );
};

export default Widgets;
