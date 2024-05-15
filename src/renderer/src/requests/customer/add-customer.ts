import { api } from "@renderer/api/api"
import { IAddCustomerModel } from "@renderer/interfaces/customer"

export const addCustomer = async (data: IAddCustomerModel) => {
    return api.post("/customer", data).then((res) => res.data).catch((err) => { throw err })
}