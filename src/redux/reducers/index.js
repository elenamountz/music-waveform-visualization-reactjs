import { combineReducers } from 'redux';
import songReducer from 'redux/reducers/songReducer';

const rootReducer = combineReducers({
  songs: songReducer
});

export default rootReducer;