import React from 'react';

import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: 'white',
      color: 'black',
    },
    card__cardHeading: {
      height: '4rem',
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    card__cardMedia: {
      'position': 'relative',
      'zIndex': 99,
      'overflow': 'hidden',
      'objectFit': 'fill',
      'aspectRatio': '4.5/3',
      '&:hover': {
        transform: 'scale(1.1)',
        transition: 'all .5s',
      },
    },
    card__cardContent: {
      'position': 'relative',
      'zIndex': 101,
      'height': '16rem',
      'paddingBottom': '2rem',
      'overflowY': 'hidden',
      [theme.breakpoints.down('md')]: {
        height: '20rem',
      },
    },
  }),
);

const SliderItem = ({name, description, photoUrl}) => {
  const classes = useStyles();
  console.log(name, description, photoUrl);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.card__cardMedia}
        component='img'
        alt={name}
        title={name}
        image={photoUrl}
      />
      <CardContent className={classes.card__cardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          className={classes.card__cardHeading}
          align='center'
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p">
          {description.substr(0, 300)+'...'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SliderItem;
