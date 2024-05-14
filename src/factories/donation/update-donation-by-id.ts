import { DonationInfra } from "@/infra/donation/donation-infra";
import { UpdateDonationByIdController } from "@/modules/donation/controller/update-donation-by-id/update-donation-by-id";
import { UpdateDonationByIdUseCase } from "@/modules/donation/use-case/update-donation-by-id/update-donation-by-id";

export const updateDonationByIdFactory = (): UpdateDonationByIdController => {
  return new UpdateDonationByIdController(
    new UpdateDonationByIdUseCase(new DonationInfra())
  );
};
