import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    countryImage: {
      width: '100%',
    },
  }),
);

const CountryData = ({countryData}) => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <Typography variant='h2' component='h1' align='center'>
        {countryData.name}
      </Typography>
      <Grid container spacing={0} >
        <Grid item lg={12} md={12} xs={12}>
          <img
            src={countryData.imageUrl}
            alt={countryData.name}
            className={classes.countryImage}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CountryData;

