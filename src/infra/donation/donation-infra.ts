import { IAddDonationModel } from "@/domain/models/donation";
import { IAddDonationRepository } from "@/domain/repositories/donation/add-donation-repository";
import { ILoadDonationsRepository } from "@/domain/repositories/donation/load-donations-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class DonationInfra
  implements IAddDonationRepository, ILoadDonationsRepository
{
  async add(data: IAddDonationModel) {
    return await prismaHelper.donations.create({
      data,
    });
  }

  async load() {
    return await prismaHelper.donations.findMany();
  }
}
