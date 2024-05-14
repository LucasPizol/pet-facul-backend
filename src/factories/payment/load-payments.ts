import { PaymentInfra } from "@/infra/payment/payment-infra";
import { LoadPaymentsController } from "@/modules/payment/controller/load-payments/load-payments";
import { LoadPaymentsUseCase } from "@/modules/payment/use-case/load-payments/load-payments";

export const loadPaymentsFactory = (): LoadPaymentsController => {
  return new LoadPaymentsController(
    new LoadPaymentsUseCase(new PaymentInfra())
  );
};
