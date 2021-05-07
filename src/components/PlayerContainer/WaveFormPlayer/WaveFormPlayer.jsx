import React, { useState, useEffect, useRef, Fragment } from "react";
import WaveSurfer from "wavesurfer.js";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Replay10Icon from '@material-ui/icons/Replay10';
import Forward10Icon from '@material-ui/icons/Forward10';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "400vh",
    marginLeft: "auto",
    marginRight: "auto"
  },
  waveFormWrapper: {
    flexGrow: 7,
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column"
  },
  controls: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    marginLeft: "10px"
  },
  replay: { 
    margin: "20px", 
    cursor: "pointer" 
  },
  pause: {
    margin: "20px", 
    cursor: "pointer"
  },
  play: {
    margin: "20px", 
    cursor: "pointer"
  },
  forward: { 
    margin: "20px", 
    cursor: "pointer" 
  }
});

const WaveFormPlayer = (props) => {
  const classes = useStyles();

  const waveformRef = useRef();
  const trackRef = useRef(); 
  
  const [waveSurfer, setWaveSurfer] = useState(null);
  const [playingAudio, setPlayingAudio] = useState(false);

  const playAudio = () => {
    if (!props.hideWave)
      waveSurfer.play();
    else
      trackRef.current.play();
    setPlayingAudio(true);
  };

  const pauseAudio = () => {
    if (!props.hideWave)
      waveSurfer.pause();
    else
      trackRef.current.pause();
    setPlayingAudio(false);
  };

  const seekAudioTenSeconds = ahead => {
    if (ahead)
      trackRef.current.currentTime += 10;
    else
      trackRef.current.currentTime -= 10;
  };

  useEffect(() => {
    if(waveSurfer == null) { // First render
      const wavesurfer = props.waveStyles
        ? WaveSurfer.create({
          ...props.waveStyles,
          container: "#waveform",
          responsive: true,
          backend: "MediaElement"
        })
        : WaveSurfer.create({
          container: "#waveform",
          responsive: true,
          backend: "MediaElement"
        });
      setWaveSurfer(wavesurfer);
      wavesurfer.load(trackRef.current)
    } else { // Song changed
      waveSurfer.load(trackRef.current);
      setPlayingAudio(false);
    }
  }, [props.audioUrl]);

  return (
    <>
      <div className={classes.root}>
        {!props.hideImage && (
          <div>
            <img
              src={props.imageUrl}
              alt="cover"
              style={
                props.imgStyles ? { ...props.imgStyles } : { maxWidth: "120px" }
              }
            />
          </div>
        )}
        <div className={classes.waveFormWrapper}>
          <div>
            {!props.hideWave && <div ref={waveformRef} id="waveform" />}
            <audio src={props.audioUrl} ref={trackRef} />
          </div>
          <div className={classes.controls}>
            <Replay10Icon 
              className={classes.replay} 
              onClick={() => seekAudioTenSeconds(false)} />

            {playingAudio ? (
                <PauseIcon 
                  className={classes.pause} 
                  onClick={() => (playingAudio ? pauseAudio() : playAudio())} />
              ) : (
                <PlayArrowIcon 
                  className={classes.play} 
                  onClick={() => (playingAudio ? pauseAudio() : playAudio())} />
            )}
            <Forward10Icon 
              className={classes.forward} 
              onClick={() => seekAudioTenSeconds(true)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WaveFormPlayer;
