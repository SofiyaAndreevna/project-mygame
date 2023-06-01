export type Question = {
  id: number;
  titleId: number;
  text: string;
  answer: string;
  points: number;
};

export type Title = {
  id: number;
  title: string;
  Questions: Question[];
};

export type State = {
  titles: Title[];
};
