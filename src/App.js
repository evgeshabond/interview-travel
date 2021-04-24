import React from 'react';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import themes from './themes/themes';
import useToggleTheme from './hooks/useToggleTheme';
import CssBaseline from '@material-ui/core/CssBaseline';


const App = (props) => {
  const toggleTheme = useToggleTheme();
  const theme = useSelector((state) => state.settings.theme);

  return (
    <ThemeProvider theme={{...themes[theme]}}>
      <CssBaseline>
        <Button
          color='primary'
          onClick={() => toggleTheme()}>
            Button
        </Button>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
