import { User } from './type/type';

type Action = { type: 'user/registration'; payload: User }
| { type: 'user/login'; payload: User };

export default Action;
