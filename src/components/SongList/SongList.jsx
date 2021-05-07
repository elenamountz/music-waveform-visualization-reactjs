import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SongCard from 'components/SongCard';
import { selectSongList, selectSongListError, selectSongListLoading } from 'redux/selectors/songSelector';
import { useSelector, shallowEqual } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    padding: '30px'
  }
}));

const SongList = () => {
  const classes = useStyles();
  const songList = useSelector(selectSongList, shallowEqual);
  const songListError = useSelector(selectSongListError, shallowEqual);
  const songListLoading = useSelector(selectSongListLoading, shallowEqual);
  const songListFound = !songListLoading && songListError === null;

  return (
    songListFound && songList.length &&
    <Paper className={classes.root} elevation={0}>
      <Grid container spacing={3}>  
        {songList.map((song) => (
          <Grid key={song.id} item xs={12} md={6} lg={4} >
            <SongCard 
              id={song.id}
              title={song.title}
              album={song.album}
              artist={song.artist}
              coverUrl={song.coverUrl}
              />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

}

export default SongList
