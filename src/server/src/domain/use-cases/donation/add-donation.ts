import { IAddCustomerModel } from "@/domain/models/customer";
import { IAddDonationModel, IDonationModel } from "@/domain/models/donation";

export interface IAddDonation {
  add: (data: IAddDonationModel & IAddCustomerModel) => Promise<IDonationModel>;
}
