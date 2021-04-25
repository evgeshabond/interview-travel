import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: 'hsl(246, 60%, 70%)',
      main: 'hsl(209, 60%, 50%)',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: 'hsl(246, 100%, 100%)',
      paper: 'hsl(246, 60%, 80%)',
    },
    text: {
      // disabled: 'rgba(0, 0, 0, 0.38)',
      // hint: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.87)',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            minHeight: '100vh',
          },
        },
      },
    },
  },
});
