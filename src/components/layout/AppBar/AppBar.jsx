import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from 'components/layout/AppBar/ScrollTop';
import CssBaseline from '@material-ui/core/CssBaseline';

const AppBar = () => {

  return (
    <div >
      <CssBaseline />
      <MuiAppBar >
        <Toolbar disableGutters={false} >
          <Typography edge="start" variant="h6">Music App</Typography>
        </Toolbar>
      </MuiAppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default AppBar;