import React from 'react';
import MuiBackdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';
import { useSelector, shallowEqual } from 'react-redux';
import { selectSongListLoading, selectTrackLoading } from 'redux/selectors/songSelector';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const BackDrop = () => {
  const classes = useStyles();
  const listIsLoading = useSelector(selectSongListLoading, shallowEqual);
  const isLoading = listIsLoading;

  return (
    <div>
      <MuiBackdrop
        invisible={false}
        className={classes.backdrop}
        open={isLoading}
        transitionDuration={600}
      >
        <CircularProgress size={50} thickness={3} color="inherit" />
      </MuiBackdrop>
    </div>
  );
};

export default BackDrop;