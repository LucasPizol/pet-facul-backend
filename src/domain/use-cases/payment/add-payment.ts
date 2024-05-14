import { IAddPaymentModel, IPaymentModel } from "@/domain/models/payment";

export interface IAddPayment {
  add: (data: IAddPaymentModel) => Promise<IPaymentModel>;
}
