import { IAddPaymentModel, IPaymentModel } from "@/domain/models/payment";

export interface IAddPaymentRepository {
  add: (data: IAddPaymentModel) => Promise<IPaymentModel>;
}
