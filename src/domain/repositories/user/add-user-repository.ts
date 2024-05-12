import { AddUserModel, UserModel } from "@/domain/models/user";

export interface AddUserRepository {
  add(data: AddUserModel): Promise<UserModel>;
}
