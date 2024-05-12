import { IAddUserModel, IUserModel } from "@/domain/models/user";
import { IAddUserRepository } from "@/domain/repositories/user/add-user-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class UserInfra implements IAddUserRepository {
  async add(data: IAddUserModel): Promise<IUserModel> {
    return await prismaHelper.user.create({
      data,
    });
  }
}
