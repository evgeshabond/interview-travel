
import React, {useEffect} from 'react';
// import getCurrency from '../../utils/getCurrency';
import {currenciesList} from '../../utils/constants';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia';
// import useWeather from '../../hooks/useWeather';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import convert from '../../utils/convert';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: '9rem',
      minWidth: '12rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      marginBottom: '1rem',
    },
  }),
);

const CurrencyWidget = () => {
  const classes = useStyles();
  const currencyFrom = useSelector((state) => state.country.country.currency);
  const [error, setError] = React.useState(null);
  const [rates, setRates] = React.useState(null);
  convert(currencyFrom);

  useEffect(() => {
    if (!currencyFrom) return;
    const promise = convert(currencyFrom);
    promise.then((data) => {
      console.log(data);
      setRates(data);
    });
    promise.catch((e) => setError(e.message));
  }, [currencyFrom]);

  // useEffect(() => console.log(rates), [rates]);

  const renderCurrenciesList = () => {
    // if (!currencyFrom) return null;
    return (
      currenciesList.map((item) => {
        if (currencyFrom === item || !rates) return null;
        return (
          <Typography color="textSecondary" variant='body2' key={item}>
            {currencyFrom} {'>'} {item} : {rates[item]}
          </Typography>
        );
      })
    );
  };

  const renderUi = () => {
    if (error) {
      return (
        <Card elevation={3} className={classes.root}>
          <Typography
            color="textSecondary"
            component="p"
            variant='h6'>
            Sorry error occured
          </Typography>
        </Card>
      );
    }
    return <Card elevation={3} className={classes.root}>
      <Typography
        color="textSecondary"
        component="p"
        variant='h5'>
        {currencyFrom}
      </Typography>
      {renderCurrenciesList()}
    </Card>;
  };

  return renderUi();
};

export default CurrencyWidget;
