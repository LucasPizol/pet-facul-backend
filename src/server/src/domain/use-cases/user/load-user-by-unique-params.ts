import { IUserModel, IUserUniqueParamsModel } from "@/domain/models/user";

export interface ILoadUserByUniqueParams {
  loadByUniqueParams: (
    params: IUserUniqueParamsModel
  ) => Promise<IUserModel | null>;
}
