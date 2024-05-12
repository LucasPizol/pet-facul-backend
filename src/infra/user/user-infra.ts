import { AddUserModel, UserModel } from "@/domain/models/user";
import { AddUserRepository } from "@/domain/repositories/user/add-user-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class UserInfra implements AddUserRepository {
  async add(data: AddUserModel): Promise<UserModel> {
    return await prismaHelper.user.create({
      data,
    });
  }
}
