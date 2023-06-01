import { Title } from '../redux/type/type';

export const getTitle = async (): Promise<Title[]> => {
  const res = await fetch('/api/game');
  const data = await res.json();
  return data;
};
