import { IAuthenticateUserModel, IUserModel } from "@/domain/models/user";

export interface IAuthenticateUser {
  authenticate: (
    data: IAuthenticateUserModel
  ) => Promise<(Omit<IUserModel, "password"> & { token: string }) | null>;
}
