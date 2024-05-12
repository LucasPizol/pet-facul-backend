import {
  IAddUser,
  IAddUserModel,
  IAddUserRepository,
} from "./add-user-protocols";

export class AddUserUseCase implements IAddUser {
  private readonly addUserRepository: IAddUserRepository;

  constructor(addUserRepository: IAddUserRepository) {
    this.addUserRepository = addUserRepository;
  }

  async add(user: IAddUserModel) {
    return await this.addUserRepository.add(user);
  }
}
