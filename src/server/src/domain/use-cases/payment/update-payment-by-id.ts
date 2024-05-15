import { IPaymentModel, IUpdatePaymentModel } from "@/domain/models/payment";

export interface IUpdatePaymentById {
  updateById: (
    id: string,
    data: Partial<IUpdatePaymentModel>
  ) => Promise<IPaymentModel | null>;
}
