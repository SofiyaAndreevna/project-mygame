import { User } from '../../Users/redux/type/type';
import { Title } from '../redux/type/type';

export const getTitle = async (): Promise<Title[]> => {
  const res = await fetch('/api/game');
  const data = await res.json();
  return data;
};

export const counterFetch = async (value: number): Promise<Number> => {
  const res = await fetch('/api/game', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      points: value,
    }),
  });
  const data = await res.json();
  return data;
};

export const getUser = async ():Promise<User> => {
  const res = await fetch('/getUser');
  const data = await res.json();
  return data;
};
