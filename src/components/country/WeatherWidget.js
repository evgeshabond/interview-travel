/* eslint-disable max-len */
import React from 'react';
// import {useSelector} from 'react-redux';
// import {weatherUrl} from '../../utils/constants';
// import axios from 'axios';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import useWeather from '../../hooks/useWeather';
import {makeStyles, createStyles} from '@material-ui/core/styles';

import mist from '../../assets/images/weather-icons/mist.png';
import clouds from '../../assets/images/weather-icons/clouds.png';
import clear from '../../assets/images/weather-icons/clear.png';
import snow from '../../assets/images/weather-icons/snow.png';
import rain from '../../assets/images/weather-icons/rain.png';
import drizzle from '../../assets/images/weather-icons/drizzle.png';
import thunderstorm from '../../assets/images/weather-icons/thunderstorm.png';
const images = {clouds, clear, drizzle, mist, rain, snow, thunderstorm};


const useStyles = makeStyles((theme) =>
  createStyles({
    weather: {
      minHeight: '9rem',
      minWidth: '12rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      marginBottom: '1rem',
    },
    weather__icon: {
      width: '3rem',
      height: '3rem',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }),
);

const WeatherWidget = () => {
  const classes = useStyles();
  const weatherData = useWeather();

  console.log(weatherData);

  return (weatherData &&
    <Card elevation={3} className={classes.weather}>
      <CardMedia
        className={classes.weather__icon}
        component='img'
        alt={'weather icon'}
        title={'weather icon'}
        src={images[`${weatherData.imageName}`]}
      />
      <Typography
        variant="body1"
        color="textSecondary"
        component="p">
        {weatherData.description}
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        component="p">
        {weatherData.temp}
      </Typography>
    </Card>
  );
};

export default WeatherWidget;
