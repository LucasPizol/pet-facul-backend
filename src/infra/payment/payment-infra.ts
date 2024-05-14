import { IAddPaymentModel } from "@/domain/models/payment";
import { IAddPaymentRepository } from "@/domain/repositories/payment/add-payment-repository";
import { ILoadPaymentsRepository } from "@/domain/repositories/payment/load-payments-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class PaymentInfra
  implements IAddPaymentRepository, ILoadPaymentsRepository
{
  async add(data: IAddPaymentModel) {
    return await prismaHelper.payment.create({
      data,
    });
  }

  async load() {
    return await prismaHelper.payment.findMany();
  }
}
