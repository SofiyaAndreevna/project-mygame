import { Question, QuestionId, Title } from './type/type';

export type Action =
  | { type: 'get/titles'; payload: Title[] }
  | { type: 'counter/change'; payload: number };
