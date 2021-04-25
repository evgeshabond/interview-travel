import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: 'hsl(246, 0%, 40%)',
      main: 'hsl(246, 0%, 4%)',
    },
    secondary: {
      main: 'hsl(300, 50%, 50%)',
    },
    background: {
      default: 'hsl(246, 0%, 20%)',
      paper: 'hsl(246, 0%, 25%)',
    },
    text: {
      // disabled: 'rgba(0, 0, 0, 0.38)',
      // hint: 'rgba(0, 0, 0, 0.38)',
      primary: 'hsl(240, 100%, 100%)',
      secondary: 'hsl(240, 0%, 0%)',
    },
  },
});
