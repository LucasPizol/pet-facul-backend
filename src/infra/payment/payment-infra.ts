import { IAddPaymentModel, IUpdatePaymentModel } from "@/domain/models/payment";
import { IAddPaymentRepository } from "@/domain/repositories/payment/add-payment-repository";
import { ILoadPaymentsRepository } from "@/domain/repositories/payment/load-payments-repository";
import { IUpdatePaymentByIdRepository } from "@/domain/repositories/payment/update-payment-by-id-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class PaymentInfra
  implements
    IAddPaymentRepository,
    ILoadPaymentsRepository,
    IUpdatePaymentByIdRepository
{
  async add(data: IAddPaymentModel) {
    return await prismaHelper.payment.create({
      data,
    });
  }

  async load() {
    return await prismaHelper.payment.findMany();
  }

  async updateById(id: string, data: Partial<IUpdatePaymentModel>) {
    const updateData = {
      ...data,
      hasPaid: data.hasPaid === undefined ? undefined : data.hasPaid,
      paidAt: data.hasPaid ? new Date() : null,
      deletedAt: data.hasDeleted === undefined ? undefined : new Date(),
      hasDeleted: data.hasDeleted === undefined ? undefined : data.hasDeleted,
    };

    return await prismaHelper.payment.update({
      where: {
        id,
      },
      data: updateData,
    });
  }
}
