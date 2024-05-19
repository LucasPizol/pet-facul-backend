import { IAddPaymentModel, IUpdatePaymentModel } from '@/domain/models/payment'
import { IAddPaymentRepository } from '@/domain/repositories/payment/add-payment-repository'
import { ILoadPaymentsRepository } from '@/domain/repositories/payment/load-payments-repository'
import { IUpdatePaymentByIdRepository } from '@/domain/repositories/payment/update-payment-by-id-repository'
import { prismaHelper } from '../prisma/prisma-helper'

export class PaymentInfra
  implements IAddPaymentRepository, ILoadPaymentsRepository, IUpdatePaymentByIdRepository
{
  async add(data: IAddPaymentModel) {
    return await prismaHelper.payment.create({
      data: {
        ...data,
        deadline: new Date(data.deadline)
      }
    })
  }

  async load() {
    return await prismaHelper.payment.findMany({
      where: {
        hasDeleted: false
      }
    })
  }

  async updateById(id: string, data: Partial<IUpdatePaymentModel>) {
    const updateData = {
      ...data,
      deletedAt: data.hasDeleted === undefined ? undefined : new Date(),
      hasDeleted: data.hasDeleted === undefined ? undefined : data.hasDeleted,
      hasPaid: data.paidAt ? true : false
    }

    return await prismaHelper.payment.update({
      where: {
        id
      },
      data: updateData
    })
  }
}
