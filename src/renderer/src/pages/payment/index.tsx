import { usePaymentsModel } from './model'
import { PaymentView } from './view'

export const PaymentPage = () => {
  return <PaymentView {...usePaymentsModel()} />
}
