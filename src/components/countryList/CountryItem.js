import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    listStyles: {
      textDecoration: 'none',
    },
    root: {
      'cursor': 'pointer',
      'maxWidth': 450,
      'maxHeight': 600,
      'height': '100%',
      'color': theme.palette.text.main,
      // 'background': theme.palette.primary.light,
      'transition': 'all .5s',
      '& .MuiCard-root': {
        paddingBottom: 5,
      },
      '&:hover': {
        'boxShadow': '0px 5px 10px 2px rgba(71, 73, 75, 0.2)',
        'color': theme.palette.text.main,
        'background': theme.palette.primary.light,
        '& .MuiCardMedia-root': {
          transform: 'scale(1.1)',
        },
      },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      transition: 'all .5s',
    },
    cardInfo: {
      height: 'auto',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const CountryItem = ({
  name,
  imageimageUrl,
  capital,
  description,
  id,
  code,
}) => {
  const classes = useStyles();
  const shortInfo = ` ${description.substr(0, 300)}...`;

  return (
    <Link to={id} className={classes.listStyles}>
      <Card
        className={classes.root}
      >
        <CardHeader
          avatar={
            <Avatar aria-label='countryName' className={classes.avatar}>
              {code}
            </Avatar>
          }
          title={name}
          subheader={capital}
        />
        <CardMedia
          className={classes.media}
          image={imageimageUrl}
          title={name}
        />
        <CardContent>
          <Typography
            variant='body2'
            className={classes.cardInfo}
            component='p'>
            {shortInfo}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryItem;

