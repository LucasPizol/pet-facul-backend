import { CustomerInfra } from "@/infra/customer/customer-infra";
import { LoadCustomerByDocumentController } from "@/modules/customer/controller/load-customer-by-document/load-customer-by-document";
import { LoadCustomerByUniqueParamsUseCase } from "@/modules/customer/use-case/load-customer-by-unique-params/load-customer-by-unique-params";

export const loadCustomerByDocumentFactory =
  (): LoadCustomerByDocumentController => {
    return new LoadCustomerByDocumentController(
      new LoadCustomerByUniqueParamsUseCase(new CustomerInfra())
    );
  };
