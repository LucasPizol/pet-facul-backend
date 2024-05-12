import { IUserModel, IUserUniqueParamsModel } from "@/domain/models/user";

export interface ILoadUserByUniqueParams {
  loadByUniqueParams: (
    where: IUserUniqueParamsModel
  ) => Promise<IUserModel | null>;
}
