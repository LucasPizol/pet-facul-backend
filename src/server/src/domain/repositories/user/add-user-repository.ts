import { IAddUserModel, IUserModel } from "@/domain/models/user";

export interface IAddUserRepository {
  add(data: IAddUserModel): Promise<IUserModel>;
}
