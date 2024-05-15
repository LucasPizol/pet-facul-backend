import { IAddUserModel, IUserModel } from "@/domain/models/user";

export interface IAddUser {
  add: (data: IAddUserModel) => Promise<IUserModel>;
}
