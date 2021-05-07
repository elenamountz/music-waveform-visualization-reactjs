import * as types from 'redux/consts/types';

export const openUploadSongDialog = () => ({
  type: types.OPEN_UPLOAD_SONG_DIALOG,
});

export const closeUploadSongDialog = () => ({
  type: types.CLOSE_UPLOAD_SONG_DIALOG,
});