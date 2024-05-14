import { IPaymentModel } from "@/domain/models/payment";

export interface ILoadPayments {
  load: () => Promise<IPaymentModel[]>;
}
