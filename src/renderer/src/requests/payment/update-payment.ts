import { api } from '@renderer/api/api'
import { IPaymentModel, IUpdatePaymentModel } from '@renderer/interfaces/payment'

export const updatePayment = async (data: IUpdatePaymentModel): Promise<IPaymentModel[]> => {
  return api
    .put('/payment', data)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
