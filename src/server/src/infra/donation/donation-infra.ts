import {
  IAddDonationModel,
  IUpdateDonationModel,
} from "@/domain/models/donation";
import { IAddDonationRepository } from "@/domain/repositories/donation/add-donation-repository";
import { IDeleteDonationByIdRepository } from "@/domain/repositories/donation/delete-donation-by-id-repository";
import { ILoadDonationsRepository } from "@/domain/repositories/donation/load-donations-repository";
import { IUpdateDonationByIdRepository } from "@/domain/repositories/donation/update-donation-by-id-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class DonationInfra
  implements
    IAddDonationRepository,
    ILoadDonationsRepository,
    IUpdateDonationByIdRepository,
    IDeleteDonationByIdRepository
{
  async add(data: IAddDonationModel) {
    return await prismaHelper.donations.create({
      data,
    });
  }

  async load() {
    return await prismaHelper.donations.findMany({
      orderBy: {
        createdAt: "desc",
      }
    });
  }

  async updateById(id: string, data: Partial<IUpdateDonationModel>) {
    return await prismaHelper.donations.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteById(id: string) {
    await prismaHelper.donations.delete({
      where: {
        id,
      },
    });
  }
}
