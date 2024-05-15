import { IDonationModel, IUpdateDonationModel } from "@/domain/models/donation";

export interface IUpdateDonationById {
  updateById(
    id: string,
    data: Partial<IUpdateDonationModel>
  ): Promise<IDonationModel | null>;
}
