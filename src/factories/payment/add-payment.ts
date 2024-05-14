import { PaymentInfra } from "@/infra/payment/payment-infra";
import { AddPaymentController } from "@/modules/payment/controller/add-payment/add-payment";
import { AddPaymentUseCase } from "@/modules/payment/use-case/add-payment/add-payment";

export const addPaymentFactory = (): AddPaymentController => {
  return new AddPaymentController(new AddPaymentUseCase(new PaymentInfra()));
};
