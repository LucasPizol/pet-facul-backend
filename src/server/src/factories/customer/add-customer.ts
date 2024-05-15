import { CustomerInfra } from "@/infra/customer/customer-infra";
import { AddCustomerController } from "@/modules/customer/controller/add-customer/add-customer";
import { AddCustomerUseCase } from "@/modules/customer/use-case/add-customer/add-customer";

export const addCustomerFactory = (): AddCustomerController => {
  return new AddCustomerController(new AddCustomerUseCase(new CustomerInfra()));
};
