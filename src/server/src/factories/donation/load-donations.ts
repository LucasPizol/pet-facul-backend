import { DonationInfra } from "@/infra/donation/donation-infra";
import { LoadDonationsController } from "@/modules/donation/controller/load-donations/load-donations";
import { LoadDonationsUseCase } from "@/modules/donation/use-case/load-donations/load-donations";

export const loadDonationsFactory = (): LoadDonationsController => {
  return new LoadDonationsController(
    new LoadDonationsUseCase(new DonationInfra())
  );
};
