export interface UserModel {
  id: string;
  username: string;
  name: string;
  password: string;
  createdAt: Date;
}

export interface AddUserModel {
  username: string;
  name: string;
  password: string;
}
