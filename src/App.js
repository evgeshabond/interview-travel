import React from 'react';
// import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import themes from './themes/themes';
// import useToggleTheme from './hooks/useToggleTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from './pages/MainPage';
import CountryPage from './pages/CountryPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = (props) => {
  // const toggleTheme = useToggleTheme();
  const theme = useSelector((state) => state.settings.theme);

  return (
    <ThemeProvider theme={{...themes[theme]}}>
      <CssBaseline>
        <Router>
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/:id' component={CountryPage} />
          </Switch>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
