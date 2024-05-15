import { IPaymentModel } from "@/domain/models/payment";

export interface ILoadPaymentsRepository {
  load: () => Promise<IPaymentModel[]>;
}
