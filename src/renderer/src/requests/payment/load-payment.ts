import { api } from '@renderer/api/api'
import { IPaymentModel } from '@renderer/interfaces/payment'

export const loadPayment = async (): Promise<IPaymentModel[]> => {
  return api
    .get('/payment')
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
