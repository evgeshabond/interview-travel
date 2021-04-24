import React from 'react';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import themes from './themes/themes';
import useToggleTheme from './hooks/useToggleTheme';


const App = (props) => {
  const toggleTheme = useToggleTheme();
  const theme = useSelector((state) => state.settings.theme);

  return (
    <ThemeProvider theme={{...themes[theme]}}>
      <Button
        color='primary'
        onClick={() => toggleTheme()}>
          Button
      </Button>
    </ThemeProvider>
  );
};

export default App;
