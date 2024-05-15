import { CustomerInfra } from '@/infra/customer/customer-infra'
import { LoadCustomerController } from '@/modules/customer/controller/load-customer/load-customer'
import { LoadCustomerUseCase } from '@/modules/customer/use-case/load-customer/load-customer'

export const loadCustomerFactory = (): LoadCustomerController => {
  return new LoadCustomerController(new LoadCustomerUseCase(new CustomerInfra()))
}
