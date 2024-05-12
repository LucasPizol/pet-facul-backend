export interface IUserModel {
  id: string;
  username: string;
  name: string;
  password: string;
  createdAt: Date;
}

export interface IAddUserModel {
  username: string;
  name: string;
  password: string;
}
