import { ICustomerModel } from "@/domain/models/customer";

export interface ILoadCustomerRepository {
    load: () => Promise<ICustomerModel[]>
}