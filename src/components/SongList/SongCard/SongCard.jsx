import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { selectTrackToPlay } from 'redux/actions/song';
import {useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    border: '1px solid',
    borderRadius: '5px',
    marginBottom: '1rem',
    color: grey[200],
    '&:hover': {
      cursor: 'pointer',
    }
  },
  title: {
    color: grey[900],
    fontWeight: 500,
  },
  artist: {
    color: grey[700],
    fontWeight: 500,
  },
  avatar: {
    width: '60px',
    height: '60px'
  },
});

const SongCard = ({ id, title, artist, album, coverUrl }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initTrackInfo = () => {
    const trackInfo = { id, title, artist, album, coverUrl };
    dispatch(selectTrackToPlay(trackInfo));
  }

  return (
    <div className={classes.root}>
      <Card elevation={0} onClick={initTrackInfo} >
        <CardHeader
          avatar={
            <Avatar
              className={classes.avatar}
              alt={artist}
              src={coverUrl}
            />
          }
          title={
            <Typography
              variant="subtitle1"
              component="div"
              className={classes.title}
            >
              {title}
            </Typography>
          }
          subheader={
            <Typography
              variant="subtitle2"
              component="span"
              className={classes.artist}
            >
              {artist}
            </Typography>
          }
        />
      </Card>
    </div>
  )
}

export default SongCard
