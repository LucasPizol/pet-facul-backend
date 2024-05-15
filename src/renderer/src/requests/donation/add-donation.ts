import { api } from "@renderer/api/api"
import { IAddCustomerModel } from "@renderer/interfaces/customer"
import { IAddDonationModel, IDonationModel } from "@renderer/interfaces/donation"

export const addDonation = async (
    donation: IAddDonationModel & IAddCustomerModel
): Promise<IDonationModel> => {
    return api
        .post(`/donation`, donation)
        .then((res) => res.data)
        .catch((err) => {
            throw err
        })
}   