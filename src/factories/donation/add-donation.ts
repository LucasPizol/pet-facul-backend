import { CustomerInfra } from "@/infra/customer/customer-infra";
import { DonationInfra } from "@/infra/donation/donation-infra";
import { AddCustomerUseCase } from "@/modules/customer/use-case/add-customer/add-customer";
import { LoadCustomerByUniqueParamsUseCase } from "@/modules/customer/use-case/load-customer-by-unique-params/load-customer-by-unique-params";
import { AddDonationController } from "@/modules/donation/controller/add-donation/add-donation";
import { AddDonationUseCase } from "@/modules/donation/use-case/add-donation/add-donation";

export const addDonationFactory = (): AddDonationController => {
  const customerInfra = new CustomerInfra();

  return new AddDonationController(
    new AddDonationUseCase(
      new DonationInfra(),
      new LoadCustomerByUniqueParamsUseCase(customerInfra),
      new AddCustomerUseCase(customerInfra)
    )
  );
};
