import { useCustomerModel } from './model'
import { CustomerView } from './view'

export const CustomerPage = () => {
  return <CustomerView {...useCustomerModel()} />
}
