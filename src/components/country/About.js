import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';
import Widgets from './Widgets';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '1rem',
    },
  }),
);

const About = () => {
  const classes = useStyles();
  const countryData = useSelector((state) => state.country.country);

  return (
    <Paper className={classes.root}>
      <Typography variant='h3' component='h2' align='center'>
        {countryData.capital}
      </Typography>
      <Grid container spacing={3} >
        <Grid item lg={9} md={9} xs={12}>
          <Typography
            component='p'
            variant='body1'>
            {countryData.description}
          </Typography>
        </Grid>
        <Grid container item lg={3} md={3} xs={12}>
          <Widgets />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
