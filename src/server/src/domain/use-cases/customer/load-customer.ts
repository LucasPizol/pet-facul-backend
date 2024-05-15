import { ICustomerModel } from "@/domain/models/customer";

export interface ILoadCustomer {
    load: () => Promise<ICustomerModel[]>
}