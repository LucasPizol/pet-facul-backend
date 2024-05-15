import { PaymentInfra } from "@/infra/payment/payment-infra";
import { UpdatePaymentByIdController } from "@/modules/payment/controller/update-payment/update-payment";
import { UpdatePaymentByIdUseCase } from "@/modules/payment/use-case/update-payment/update-payment";

export const updatePaymentByIdFactory = (): UpdatePaymentByIdController => {
  return new UpdatePaymentByIdController(
    new UpdatePaymentByIdUseCase(new PaymentInfra())
  );
};
