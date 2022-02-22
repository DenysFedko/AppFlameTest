import {createStore, combineReducers} from 'redux';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({users: usersReducer});

const configureStore = () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
};

export default configureStore;
