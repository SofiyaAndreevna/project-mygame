import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { questionsReducer } from './features/Questions/redux/reducer';
import { userReducer } from './features/Users/redux/reducer';

const store = createStore(
  combineReducers({
    questionsReducer,
    userReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
