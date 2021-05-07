import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';

const configureStore = () => {
  const middlewares = [thunk];

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
  );

  return store;
};

export default configureStore;