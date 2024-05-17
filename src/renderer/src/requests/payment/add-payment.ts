import { api } from '@renderer/api/api'
import { IAddPaymentModel, IPaymentModel } from '@renderer/interfaces/payment'

export const addPayment = async (data: IAddPaymentModel): Promise<IPaymentModel> => {
  return await api
    .post('/payment', data)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
