import { IAddCustomerModel, ICustomerModel } from "@/domain/models/customer";

export interface IAddCustomerRepository {
  add: (data: IAddCustomerModel) => Promise<ICustomerModel>;
}
