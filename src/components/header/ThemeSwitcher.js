import React from 'react';
import Switch from '@material-ui/core/Switch';
import {useDispatch, useSelector} from 'react-redux';
import {setTheme} from '../../redux/settingsSlice';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  const switchTheme = () => {
    dispatch(setTheme({
      theme: theme === 'light'?
                       'dark':
                       'light',
    }));
  };

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={switchTheme}
      name="themeSwitcher"
      inputProps={{'aria-label': 'dark theme switcher'}}
    />
  );
};

export default ThemeSwitcher;
