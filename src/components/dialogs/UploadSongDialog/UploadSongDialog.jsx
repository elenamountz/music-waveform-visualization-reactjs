import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { useSelector, shallowEqual } from 'react-redux';
import { selectUploadSongOpen } from 'redux/selectors/dialogSelector';
import { useDispatch } from 'react-redux';
import { closeUploadSongDialog } from 'redux/actions/dialog';
import { fetchSongs } from 'redux/actions/song';
import songService from 'data/services/songService';

const UploadSongDialog = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectUploadSongOpen, shallowEqual);
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    album: '',
    coverUrl: '',
    track: null
  })

  const handleCancel = () => {
    dispatch(closeUploadSongDialog());
  }

  const handleClose = () => {
    dispatch(closeUploadSongDialog());
    dispatch(fetchSongs());
  };

  const handleFileSelectionChange = (event) => {
    const files = Array.from(event.target.files);
    const [file] = files;
    setNewSong(prevState => ({
      ...prevState,
      track: file,
    }));
  }

  const handleTextFieldChange = (event, name) => {
    const value = event.target.value;
    setNewSong(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleUpload = async () => {
    const request = new FormData();
    request.append("audio_file", newSong.track);
    request.append("title", newSong.title);
    request.append("artist", newSong.artist);
    request.append("album", newSong.album);
    request.append("coverUrl", newSong.coverUrl);
    try {
      await songService.upload(request);
      handleClose();
    } catch (err) {
      console.error('err', err);
    }
  }

  useEffect(() => {
    setNewSong({
      title: '',
      artist: '',
      album: '',
      coverUrl: '',
      track: null
    });
  }, [open])

  return (
    <div>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New song</DialogTitle>
        <DialogContent>
          <Button
            variant="outlined"
            component="label">
            Select File
            <input
              type="file"
              accept="audio/mpeg, audio/mp3" // TODO: fetch all compatible extensions from api
              onChange={event => handleFileSelectionChange(event)}
              hidden
            />
          </Button>

          <TextField
            margin="normal"
            id="name"
            label="Title"
            value={newSong.title}
            onChange={event => handleTextFieldChange(event, 'title')}
            fullWidth
          />

          <TextField
            margin="normal"
            id="name"
            label="Artist"
            value={newSong.artist}
            onChange={event => handleTextFieldChange(event, 'artist')}
            fullWidth
          />

          <TextField
            margin="normal"
            id="name"
            label="Album"
            value={newSong.album}
            onChange={event => handleTextFieldChange(event, 'album')}
            fullWidth
          />

          <TextField
            margin="normal"
            id="name"
            label="Cover URL"
            value={newSong.coverUrl}
            onChange={event => handleTextFieldChange(event, 'coverUrl')}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpload} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UploadSongDialog
