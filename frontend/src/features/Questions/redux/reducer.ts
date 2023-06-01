import { Action } from './action';
import { State } from './type/type';

export const initState: State = { titles: [] };
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
    default:
      return state;
  }
};
