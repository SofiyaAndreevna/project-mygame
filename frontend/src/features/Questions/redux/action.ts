import { Title } from './type/type';

export type Action = {
  type: 'get/titles';
  payload: Title[];
};
