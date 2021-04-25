import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {SwiperSlide} from 'swiper/react';
import {Swiper} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import clsx from 'clsx';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import useSliderParams from '../../hooks/useSliderParams';
import SliderItem from './SliderItem';
// import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '2rem',
      padding: '1rem',
      // marginBottom: '5rem',
      // paddingLeft: '0.5rem',
      // paddingRight: '0.5rem',
    },
    placesList: {
      padding: '1rem',
      backgroundColor: '#cccded',
      margin: '20px 0',
    },
    placesList__button__prev: {
      cursor: 'pointer',
      margin: '10px',
    },
    placesList__button__next: {
      cursor: 'pointer',
      margin: '10px',
    },
    container: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    slide: {
      marginTop: '2rem',
      backgroundColor: 'white',
      minHeight: '45rem',
      width: 'auto',
    },
  }),
);

const Slider = () => {
  SwiperCore.use([Navigation]);
  const classes = useStyles();
  const params = useSliderParams();
  const places = useSelector((state) => state.country.country.places);
  console.log(places);

  const renderSlides = () => {
    return places.map(({description, name, photoUrl}) => (
      <SwiperSlide key={name}>
        <SliderItem
          name={name}
          description={description}
          photoUrl={photoUrl}
        />
      </SwiperSlide>

    ));
  };

  if (!places) return null;

  return (
    <Paper className={classes.root}>
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
          disabledClass: 'text-dark-s border-dark-s',
        }}
        loop={true}
        spaceBetween={params.spaceBetween}
        slidesPerView={params.slides}>
        {renderSlides()}
        <div className={classes.container}>
          <div className={clsx(classes.placesList__button__prev, 'prev')}>
            <NavigateBeforeIcon fontSize='large'/>
          </div>
          <div className={clsx(classes.placesList__button__next, 'next')}>
            <NavigateNextIcon fontSize='large'/>
          </div>
        </div>
      </Swiper>
    </Paper>
  );
};

export default Slider;
