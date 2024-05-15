import { IAddDonationModel, IDonationModel } from "@/domain/models/donation";

export interface IAddDonationRepository {
  add: (data: IAddDonationModel) => Promise<IDonationModel>;
}
