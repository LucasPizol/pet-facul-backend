import {
  ILoadUserByUniqueParams,
  ILoadUserByUniqueParamsRepository,
  IUserUniqueParamsModel,
} from "./load-user-by-unique-params-protocols";

export class LoadUserByUniqueParamsUseCase implements ILoadUserByUniqueParams {
  private readonly LoadUserByUniqueParamsRepository: ILoadUserByUniqueParamsRepository;

  constructor(
    LoadUserByUniqueParamsRepository: ILoadUserByUniqueParamsRepository
  ) {
    this.LoadUserByUniqueParamsRepository = LoadUserByUniqueParamsRepository;
  }

  async loadByUniqueParams(where: IUserUniqueParamsModel) {
    return await this.LoadUserByUniqueParamsRepository.loadByUniqueParams(
      where
    );
  }
}
