import {
  IAddUserModel,
  IUserModel,
  IUserUniqueParamsModel,
} from "@/domain/models/user";
import { IAddUserRepository } from "@/domain/repositories/user/add-user-repository";
import { ILoadUserByUniqueParamsRepository } from "@/domain/repositories/user/load-user-by-unique-params-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class UserInfra
  implements IAddUserRepository, ILoadUserByUniqueParamsRepository
{
  async add(data: IAddUserModel): Promise<IUserModel> {
    return await prismaHelper.user.create({
      data,
    });
  }

  async loadByUniqueParams(
    where: IUserUniqueParamsModel
  ): Promise<IUserModel | null> {
    for (const key in where) {
      const thisKey = key as keyof IUserUniqueParamsModel;
      if (thisKey) {
        return await prismaHelper.user.findUnique({
          where: {
            id: thisKey,
          },
        });
      }
    }

    return null;
  }
}
