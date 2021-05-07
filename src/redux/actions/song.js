import * as types from 'redux/consts/types';
import songService from 'data/services/songService';

/**
 * Fetch all songs info
 */

export const fetchSongsInfoRequest = () => ({
  type: types.FETCH_SONGS_INFO_REQUEST,
});

export const fetchSongsInfoSuccess = (data) => ({
  type: types.FETCH_SONGS_INFO_SUCCESS,
  payload: {
    data,
  },
});

export const fetchSongsInfoError = (error) => ({
  type: types.FETCH_SONGS_INFO_ERROR,
  payload: {
    error,
  },
});

export const fetchSongs = () => async (dispatch) => {
  dispatch(fetchSongsInfoRequest());
  try {
    const response = await songService.findAll();
    if (!response) {
      throw Error();
    }
    return dispatch(fetchSongsInfoSuccess(response.data));
  } catch (err) {
    return dispatch(fetchSongsInfoError(err.response.data));
  }
};

export const selectTrackToPlay = (data) => ({
  type: types.SELECT_TRACK_TO_PLAY,
  payload: {
    data
  }
});
