import { createStore } from 'redux';
import rootReducer from '../reducers';

const configStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState
  );
}

export default configStore;
