import {
  IAddCustomerModel,
  ICustomerModel,
  ICustomerUniqueParamsModel,
} from "@/domain/models/customer";
import { IAddCustomerRepository } from "@/domain/repositories/customer/add-customer-repository";
import { ILoadCustomerByUniqueParamsRepository } from "@/domain/repositories/customer/load-customer-by-unique-params-repository";
import { prismaHelper } from "../prisma/prisma-helper";
import { ILoadCustomerRepository } from "@/domain/repositories/customer/load-customer-repository";

export class CustomerInfra
  implements ILoadCustomerByUniqueParamsRepository, IAddCustomerRepository, ILoadCustomerRepository {
  async loadByUniqueParams(
    params: ICustomerUniqueParamsModel
  ): Promise<ICustomerModel | null> {
    return await prismaHelper.customer.findUnique({
      where: {
        id: params.id,
        document: params.document,
      },
    });
  }

  async add(data: IAddCustomerModel): Promise<ICustomerModel> {
    return await prismaHelper.customer.create({
      data,
    });
  }

  async load(): Promise<ICustomerModel[]> {
    return await prismaHelper.customer.findMany();
  }
}
