import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from 'components/layout/AppBar/ScrollTop';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { openUploadSongDialog } from 'redux/actions/dialog';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  plusButton: {
    marginRight: '40px',
  },
}));

const AppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDialogOpen = () => {
    dispatch(openUploadSongDialog());
  }

  return (
    <div >
      <CssBaseline />
      <MuiAppBar >
        <Toolbar disableGutters={false} className={classes.toolbar} >
          <Typography edge="start" variant="h6">Music App</Typography>
          <IconButton aria-label="display more actions" edge="end" color="secondary" onClick={handleDialogOpen} >
            <AddIcon />
          </IconButton>
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