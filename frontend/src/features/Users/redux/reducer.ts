import Action from './action';
import { State } from './type/type';

export const initState: State = { user: {} };
export const userReducer = (
  state: State = initState,
  action: Action
): State => {
  switch (action.type) {
    case 'user/registration':
      return {
        ...state,
        user: action.payload,
      };
      case 'user/login':
        return {
          ...state,
          user: action.payload
        };
        case 'user/logout':
          return{
             ...state,
          user: {}
          };
    default:
      return state;
  }
};
