import { IAuthenticateUser } from "@/domain/use-cases/user/authenticate-user";
import { MockProxy, mock } from "jest-mock-extended";
import { ILoadUserByUniqueParams } from "../load-user-by-unique-params/load-user-by-unique-params-protocols";
import {
  IBcryptCompare,
  IJWTSign,
} from "../register-user/register-user-protocols";
import { AuthenticateUserUseCase } from "./authenticate-user";

describe("AuthenticateUserUseCase", () => {
  let authenticateUserUseCase: IAuthenticateUser;
  let loadUserByUniqueParamsUseCase: MockProxy<ILoadUserByUniqueParams>;
  let jwtService: MockProxy<IJWTSign>;
  let bcryptService: MockProxy<IBcryptCompare>;

  const date = new Date();

  const fakeAuthenticateData = {
    username: "any_username",
    password: "any_password",
  };

  beforeEach(() => {
    loadUserByUniqueParamsUseCase = mock();
    jwtService = mock();
    bcryptService = mock();

    loadUserByUniqueParamsUseCase.loadByUniqueParams.mockResolvedValue({
      id: "any_id",
      name: "any_name",
      username: "any_username",
      password: "any_password",
      createdAt: date,
    });

    jwtService.sign.mockReturnValue("any_token");

    bcryptService.compare.mockResolvedValue(true);

    authenticateUserUseCase = new AuthenticateUserUseCase(
      loadUserByUniqueParamsUseCase,
      jwtService,
      bcryptService
    );
  });

  it("should be able to authenticate a user", async () => {
    const response = await authenticateUserUseCase.authenticate(
      fakeAuthenticateData
    );

    expect(response).toEqual({
      id: "any_id",
      name: "any_name",
      username: "any_username",
      createdAt: date,
      token: "any_token",
    });
    expect(
      loadUserByUniqueParamsUseCase.loadByUniqueParams
    ).toHaveBeenCalledWith({
      username: "any_username",
    });
    expect(jwtService.sign).toHaveBeenCalledWith(
      {
        id: "any_id",
        name: "any_name",
        username: "any_username",
        createdAt: date,
      },
      "1d"
    );
  });

  it("should be able to authenticate a user", async () => {
    const response = await authenticateUserUseCase.authenticate(
      fakeAuthenticateData
    );

    expect(response).toEqual({
      id: "any_id",
      name: "any_name",
      username: "any_username",
      createdAt: date,
      token: "any_token",
    });
    expect(
      loadUserByUniqueParamsUseCase.loadByUniqueParams
    ).toHaveBeenCalledWith({
      username: "any_username",
    });
    expect(jwtService.sign).toHaveBeenCalledWith(
      {
        id: "any_id",
        name: "any_name",
        username: "any_username",
        createdAt: date,
      },
      "1d"
    );
  });

  it("should not be able to authenticate a user because incorrect password", async () => {
    bcryptService.compare.mockResolvedValue(false);

    try {
      const response = await authenticateUserUseCase.authenticate(
        fakeAuthenticateData
      );
      expect(response).toHaveProperty("id");
    } catch (error: any) {
      expect(error.message).toEqual("Invalid password");
    }
  });

  it("should not be able to authenticate a user because user not exists", async () => {
    loadUserByUniqueParamsUseCase.loadByUniqueParams.mockResolvedValue(null);

    try {
      const response = await authenticateUserUseCase.authenticate(
        fakeAuthenticateData
      );
      expect(response).toHaveProperty("id");
    } catch (error: any) {
      expect(error.message).toEqual("User not found");
    }
  });
});
