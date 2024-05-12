import { AddUserModel, UserModel } from "@/domain/models/user";

export interface AddUser {
  add: (user: AddUserModel) => Promise<UserModel>;
}
