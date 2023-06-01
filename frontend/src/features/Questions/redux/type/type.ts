export type Question = {
  id: number;
  idTitle: number;
  text: string;
  answer: string;
  points: number;
};

export type Title = {
  id: number;
  title: string;
  quest: Question[];
};

export type State = {
  titles: Title[];
};
