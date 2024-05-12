import {
  ICustomerModel,
  ICustomerUniqueParamsModel,
} from "@/domain/models/customer";

export interface ILoadCustomerByUniqueParams {
  loadByUniqueParams: (
    params: ICustomerUniqueParamsModel
  ) => Promise<ICustomerModel | null>;
}
