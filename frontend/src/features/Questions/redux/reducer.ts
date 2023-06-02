import { Action } from './action';
import { State } from './type/type';

export const initState: State = { titles: [], counter: 0, questions: [] };
export const questionsReducer = (
  state: State = initState,
  action: Action
): State => {
  switch (action.type) {
    case 'get/titles':
      return {
        ...state,
        titles: action.payload,
      };
    case 'counter/change':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};
