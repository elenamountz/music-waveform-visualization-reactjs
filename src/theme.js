import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const theme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: grey[900],
      },
      secondary: {
        main: grey[50]
      }
    }
  });

export default theme;

