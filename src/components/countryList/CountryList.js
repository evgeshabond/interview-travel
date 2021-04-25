import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCountries} from '../../redux/countriesSlice';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import CountryItem from './CountryItem';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: 1,
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(3),
      justifyContent: 'center',
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      // backgroundColor: theme.palette.background.default,
      // backgroundColor: 'red',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const CountryList = () => {
  const classes = useStyles();
  const language = useSelector((state) => state.settings.language);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(fetchCountries(language));
  }, [language, dispatch]);

  if (countries.status === 'loading') {
    return (<p>Loading</p>);
  }

  if (countries.status === 'failed') {
    return (<p>Something went wrong</p>);
  }

  return (
    <>
      <div className={classes.root}>
        {countries.map((item) => (
          <CountryItem
            imageimageUrl={item.imageUrl}
            capital={item.capital}
            name={item.name}
            description={item.description}
            id={item.id}
            key={item.id}
            code={item.ISOCode}
          />
        ))}
      </div>
    </>
  );
};

export default CountryList;
