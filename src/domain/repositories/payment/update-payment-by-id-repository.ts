import { IPaymentModel, IUpdatePaymentModel } from "@/domain/models/payment";

export interface IUpdatePaymentByIdRepository {
  updateById: (
    id: string,
    data: Partial<IUpdatePaymentModel>
  ) => Promise<IPaymentModel | null>;
}
