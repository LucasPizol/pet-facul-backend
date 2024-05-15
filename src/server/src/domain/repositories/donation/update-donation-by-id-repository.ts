import { IDonationModel, IUpdateDonationModel } from "@/domain/models/donation";

export interface IUpdateDonationByIdRepository {
  updateById(
    id: string,
    data: Partial<IUpdateDonationModel>
  ): Promise<IDonationModel | null>;
}
