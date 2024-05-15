import { api } from "@renderer/api/api";
import { ICustomerModel } from "@renderer/interfaces/customer";

export const loadCustomer = async (): Promise<ICustomerModel[] | null> => {
    return api.get(`/customer`).then((res) => res.data).catch((err) => {
        throw err
    })
}