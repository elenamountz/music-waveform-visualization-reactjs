import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from 'components/Main';
import useTheme from './theme';

// eslint-disable-next-line react-hooks/rules-of-hooks
const muiTheme = useTheme();

const App = () => (
  <div>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  </div>
);

export default App;