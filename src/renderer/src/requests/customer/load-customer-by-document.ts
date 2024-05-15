import { api } from "@renderer/api/api";
import { ICustomerModel } from "@renderer/interfaces/customer";

export const loadCustomerByDocument = async (document: string): Promise<ICustomerModel | null> => {
    return api.get(`/customer/${document}`).then((res) => res.data).catch((err) => {
        throw err
    })
}