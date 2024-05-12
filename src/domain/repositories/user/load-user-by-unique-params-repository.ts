import { IUserModel, IUserUniqueParamsModel } from "@/domain/models/user";

export interface ILoadUserByUniqueParamsRepository {
  loadByUniqueParams: (
    where: IUserUniqueParamsModel
  ) => Promise<IUserModel | null>;
}
