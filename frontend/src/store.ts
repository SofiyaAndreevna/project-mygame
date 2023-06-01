import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({
   }),
   );

export default store;

export type RootState = ReturnType<typeof store.getState>;
