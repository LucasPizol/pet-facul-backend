import { IAddUserModel, IUserModel } from "@/domain/models/user";

export interface IRegisterUser {
  register: (
    data: IAddUserModel
  ) => Promise<Omit<IUserModel, "password"> & { token: string }>;
}
