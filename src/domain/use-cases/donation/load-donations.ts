import { IDonationModel } from "@/domain/models/donation";

export interface ILoadDonations {
  load: () => Promise<IDonationModel[]>;
}
