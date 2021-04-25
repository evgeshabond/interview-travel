/* eslint-disable */
import React from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {weatherUrl} from '../utils/constants';
import axios from 'axios';

const atmosphereList = ['mist', 'smoke', 'haze', 'dust', 'fog', 'sand', 'dust', 'ash',
  'squall', 'tornado'];

const useWeather = () => {
  const [data, setData] = React.useState(null);
  const language = useSelector((state) => state.settings.language);
  const coordinates = useSelector((state) =>
    state.country?.country?.capitalLocation?.coordinates);

  useEffect(() => {
    if (!coordinates) return null;

    const url = `${weatherUrl}?lat=${coordinates[0]}&lon=${coordinates[1]}&lang=${language}&appid=57781f6b98433e378452bea1ff327bd2&units=metric`;
    const newData = {temp: '', imageName: '', description: ''};
    const dataPromise = axios.get(url);
    dataPromise.then((res) => {
      newData.temp = res.data.main.temp + ' °C';
      if ( atmosphereList.includes(res.data.weather[0].main.toLowerCase()) ) {
        newData.imageName = 'mist';
      } else {
        newData.imageName = res.data.weather[0].main.toLowerCase();
      }
      const dataPromiseWithParam = axios.get(url);
      dataPromiseWithParam.then((res) => {
        newData.description = res.data.weather[0].description;
        setData(newData);
      });
    })
        .catch((e) => {
          console.log(e);
        });
  }, [coordinates, language]);

  return data;
};

export default useWeather;
