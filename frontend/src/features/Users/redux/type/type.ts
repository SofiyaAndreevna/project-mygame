export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
};
export type UserReg = {
  name: string;
  email: string;
  id: number;
};

export type UserLog = {
  email: string;
  password: string;
};

export type UserId = User['id'];

export type State = {
  user: User | {};
};
