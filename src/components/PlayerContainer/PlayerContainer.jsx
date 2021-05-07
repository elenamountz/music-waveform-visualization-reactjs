import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import WaveFormPlayer from 'components/PlayerContainer/WaveFormPlayer';
import { selectCurrentTrack } from 'redux/selectors/songSelector';
import { useSelector, shallowEqual } from 'react-redux';
import constants from 'data/constants';

const useStyles = makeStyles({
  root: {
    background: '#fff',
    top: '48px',
    minHeight: '30vh',
    position: 'sticky',
    padding: '30px',
    zIndex: '10',
  },
});

const CustomPlayer = () => {
  const classes = useStyles();
  const currentTrack = useSelector(selectCurrentTrack, shallowEqual);
  const trackUrl = `${constants.baseUrl}/songs/${currentTrack?.id}/track`;
  
  if(currentTrack) {
    return (  
      <Paper className={classes.root} >
        <Typography variant="h3">
          { currentTrack.title }
        </Typography>
  
        <Typography variant="h5">
          { currentTrack.artist } - { currentTrack.album }
        </Typography>

        <br/>

        <WaveFormPlayer
          imageUrl={currentTrack.coverUrl}
          audioUrl={trackUrl}
          waveStyles={{
            cursorWidth: 1,
            progressColor: "#009688", //teal[500]
            responsive: true,
            waveColor: "#424242", //grey[800]
            cursorColor: "transparent",
            barWidth: 1,
          }}
          zoom={0}
          />
      </Paper>
    )} else {
      return null;
    } 
}

export default CustomPlayer
