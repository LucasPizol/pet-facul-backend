import { IAddDonationModel } from "@/domain/models/donation";
import { IAddDonationRepository } from "@/domain/repositories/donation/add-donation-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class DonationInfra implements IAddDonationRepository {
  async add(data: IAddDonationModel) {
    return await prismaHelper.donations.create({
      data,
    });
  }
}
