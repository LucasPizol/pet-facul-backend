import { IAddCustomerModel, ICustomerModel } from "@/domain/models/customer";

export interface IAddCustomer {
  add: (data: IAddCustomerModel) => Promise<ICustomerModel>;
}
