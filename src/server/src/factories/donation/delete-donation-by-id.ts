import { DonationInfra } from "@/infra/donation/donation-infra";
import { DeleteDonationByIdController } from "@/modules/donation/controller/delete-donation-by-id/delete-donation-by-id";
import { DeleteDonationByIdUseCase } from "@/modules/donation/use-case/delete-donation-by-id/delete-donation-by-id";

export const deleteDonationByIdFactory = (): DeleteDonationByIdController => {
  return new DeleteDonationByIdController(
    new DeleteDonationByIdUseCase(new DonationInfra())
  );
};
