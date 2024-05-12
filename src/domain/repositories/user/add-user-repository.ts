import { AddUserModel, UserModel } from "@/domain/models/user";

export interface AddUserRepository {
  add(user: AddUserModel): Promise<UserModel>;
}
