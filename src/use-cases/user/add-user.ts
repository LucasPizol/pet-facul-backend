import { AddUserModel, UserModel } from "@/domain/models/user";
import { AddUserRepository } from "@/domain/repositories/user/add-user-repository";
import { AddUser } from "@/domain/use-cases/user/add-user";

export class AddUserUseCase implements AddUser {
  private readonly addUserRepository: AddUserRepository;

  constructor(addUserRepository: AddUserRepository) {
    this.addUserRepository = addUserRepository;
  }

  async add(user: AddUserModel): Promise<UserModel> {
    return await this.addUserRepository.add(user);
  }
}
