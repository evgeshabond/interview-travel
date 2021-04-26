import React from 'react';
// import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import RsLogo from '../../assets/images/rs_school_js.svg';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.3rem',
      alignItems: 'baseline',
      paddingBottom: '1rem',
      paddingTop: '1rem',
      backgroundColor: theme.palette.primary.dark,
      fontSize: '1rem',
      marginTop: 'auto',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    logo: {
      filter: 'invert(1)',
    },
  }),
);

const Footer = () => {
  const classes = useStyles();
  const isHidden = useSelector((state) => {
    const isCountriesLoaded = state.countries.status === 'succeeded';
    const isCountryLoaded = state.country.status === 'succeeded';
    return (!(isCountriesLoaded || isCountryLoaded));
  });

  if (isHidden) {
    return null;
  }

  return (
    <div className={classes.root}>
      <span>Made by </span>
      <Link href='https://github.com/evgeshabond' color='inherit'>evgeshabond </Link>
      <span>for   </span>
      <Link href='https://rs.school/js/'>
        <img
          src={RsLogo}
          height={'30px'}
          alt='rsSchool'
          className={classes.logo}
        />
      </Link>
    </div>
  );
};

export default Footer;
