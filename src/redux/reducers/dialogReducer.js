import * as types from '../consts/types';

const initialState = {
  uploadSongDialogIsOpen: false
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_UPLOAD_SONG_DIALOG:
      return {
        ...state,
        uploadSongDialogIsOpen: true,
      };
    case types.CLOSE_UPLOAD_SONG_DIALOG:
      return {
        ...state,
        uploadSongDialogIsOpen: false,
      };
    default:
      return state;
  }
}

export default dialogReducer;