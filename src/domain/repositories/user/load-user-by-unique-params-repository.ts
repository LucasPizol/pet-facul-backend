import { IUserModel, IUserUniqueParamsModel } from "@/domain/models/user";

export interface ILoadUserByUniqueParamsRepository {
  loadByUniqueParams: (
    params: IUserUniqueParamsModel
  ) => Promise<IUserModel | null>;
}
