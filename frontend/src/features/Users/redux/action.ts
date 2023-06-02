import { User } from './type/type';

type Action =
  | { type: 'user/registration'; payload: User }
  | { type: 'user/login'; payload: User }
  | { type: 'user/logout'; payload: {} };

export default Action;
