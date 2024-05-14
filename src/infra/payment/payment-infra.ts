import { IAddPaymentModel } from "@/domain/models/payment";
import { IAddPaymentRepository } from "@/domain/repositories/payment/add-payment-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class PaymentInfra implements IAddPaymentRepository {
  async add(data: IAddPaymentModel) {
    return await prismaHelper.payment.create({
      data,
    });
  }
}
