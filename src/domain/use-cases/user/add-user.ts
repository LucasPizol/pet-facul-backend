import { AddUserModel, UserModel } from "@/domain/models/user";

export interface AddUser {
  add: (data: AddUserModel) => Promise<UserModel>;
}
