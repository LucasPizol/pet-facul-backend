import { MockProxy, mock } from "jest-mock-extended";
import { LoadUserByUniqueParamsUseCase } from "./load-user-by-unique-params";
import {
  ILoadUserByUniqueParams,
  ILoadUserByUniqueParamsRepository,
} from "./load-user-by-unique-params-protocols";

describe("LoadUserByUniqueParamsUseCase", () => {
  let loadUserByUniqueParamsUseCase: ILoadUserByUniqueParams;
  let loadUserByUniqueParamsRepository: MockProxy<ILoadUserByUniqueParamsRepository>;

  const date = new Date();

  const fakeUserData = {
    id: "any_id",
    name: "any_name",
    username: "any_username",
    password: "any_password",
    createdAt: date,
  };

  beforeEach(() => {
    loadUserByUniqueParamsRepository = mock();

    loadUserByUniqueParamsRepository.loadByUniqueParams.mockResolvedValue(
      fakeUserData
    );

    loadUserByUniqueParamsUseCase = new LoadUserByUniqueParamsUseCase(
      loadUserByUniqueParamsRepository
    );
  });

  it("should be able to load a user by username", async () => {
    const user = await loadUserByUniqueParamsUseCase.loadByUniqueParams({
      username: "any_username",
    });

    expect(user).toEqual(fakeUserData);
    expect(
      loadUserByUniqueParamsRepository.loadByUniqueParams
    ).toHaveBeenCalledWith({
      username: "any_username",
    });
  });

  it("should be able to load a user by id", async () => {
    const user = await loadUserByUniqueParamsUseCase.loadByUniqueParams({
      id: "any_id",
    });

    expect(user).toEqual(fakeUserData);
    expect(
      loadUserByUniqueParamsRepository.loadByUniqueParams
    ).toHaveBeenCalledWith({
      id: "any_id",
    });
  });

  it("should not load a user by username because it not exists", async () => {
    loadUserByUniqueParamsRepository.loadByUniqueParams.mockResolvedValue(null);

    const responseWithUsername =
      await loadUserByUniqueParamsUseCase.loadByUniqueParams({
        username: "any_username",
      });

    const responseWithId =
      await loadUserByUniqueParamsUseCase.loadByUniqueParams({
        id: "any_id",
      });

    expect(responseWithUsername).toBe(null);
    expect(responseWithId).toBe(null);
    expect(
      loadUserByUniqueParamsRepository.loadByUniqueParams
    ).toHaveBeenCalledWith({
      username: "any_username",
    });

    expect(
      loadUserByUniqueParamsRepository.loadByUniqueParams
    ).toHaveBeenCalledWith({
      id: "any_id",
    });

    expect(
      loadUserByUniqueParamsRepository.loadByUniqueParams
    ).toHaveBeenCalledTimes(2);
  });
});
