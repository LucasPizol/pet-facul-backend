export interface IUserModel {
  id: string
  username: string
  name: string
  createdAt: Date
}

export interface IAuthenticateUserModel {
  username: string
  password: string
}

export interface IAddUserModel {
    username: string;
    name: string;
    password: string;
  }
