import { combineReducers } from 'redux';
import songReducer from 'redux/reducers/songReducer';
import dialogReducer from './dialogReducer';

const rootReducer = combineReducers({
  songs: songReducer,
  dialogs: dialogReducer
});

export default rootReducer;