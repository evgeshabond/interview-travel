import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import Search from './Search';
import {makeStyles} from '@material-ui/core/styles';
import LanguageSelector from './LanguageSelector';
import ThemeSwitcher from './ThemeSwitcher';

const useStyles = makeStyles({
  appName: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar color='primary' position='sticky'>
        <Toolbar>
          <IconButton
            edge="start"
            color="secondary"
            aria-label="to main page"
          >
            <HomeIcon fontSize='default'/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            className={classes.appName}>
              Travel App
          </Typography>
          <Search />
          <LanguageSelector />
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
