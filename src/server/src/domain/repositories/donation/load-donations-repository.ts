import { IDonationModel } from "@/domain/models/donation";

export interface ILoadDonationsRepository {
    load: () => Promise<IDonationModel[]>
}