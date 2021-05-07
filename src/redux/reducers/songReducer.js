import * as types from '../consts/types';

const initialState = {
  list: [],
  listIsLoading: false,
  listError: null,
  trackInfo: null,
  trackIsLoading: false,
  trackError: null
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SONGS_INFO_REQUEST:
      return {
        ...state,
        listIsLoading: true,
      };
    case types.FETCH_SONGS_INFO_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
        listIsLoading: false,
        listError: null,
      };
    case types.FETCH_SONGS_INFO_ERROR:
      return {
        ...state,
        list: [],
        listIsLoading: false,
        listError: action.payload.error,
      };
    case types.SELECT_TRACK:
      return {
        ...state,
        currentTrack: action.payload.data,
      };
    default:
      return state;
  }
};

export default songReducer;