import {
  ICustomerModel,
  ICustomerUniqueParamsModel,
} from "@/domain/models/customer";

export interface ILoadCustomerByUniqueParamsRepository {
  loadByUniqueParams: (
    params: ICustomerUniqueParamsModel
  ) => Promise<ICustomerModel | null>;
}
