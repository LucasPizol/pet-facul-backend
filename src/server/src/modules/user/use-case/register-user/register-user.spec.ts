import { MockProxy, mock } from "jest-mock-extended";
import { RegisterUserUseCase } from "./register-user";
import {
  IAddUser,
  IBcryptHash,
  IJWTSign,
  IRegisterUser,
} from "./register-user-protocols";

describe("RegisterUserUseCase", () => {
  let registerUserUseCase: IRegisterUser;
  let bcryptService: MockProxy<IBcryptHash>;
  let jwtService: MockProxy<IJWTSign>;
  let addUserUseCase: MockProxy<IAddUser>;

  const date = new Date();

  const user = {
    id: "any_id",
    name: "any_name",
    username: "any_username",
    password: "any_password",
    createdAt: date,
  };

  beforeEach(() => {
    bcryptService = mock();
    jwtService = mock();
    addUserUseCase = mock();

    bcryptService.hash.mockResolvedValue("any_hashed_password");
    jwtService.sign.mockReturnValue("any_token");

    addUserUseCase.add.mockResolvedValue(user);

    registerUserUseCase = new RegisterUserUseCase(
      addUserUseCase,
      bcryptService,
      jwtService
    );
  });

  it("should add a user", async () => {
    const data = {
      name: "any_name",
      username: "any_username",
      password: "any_password",
    };

    const user = await registerUserUseCase.register(data);

    expect(user).toEqual({
      id: "any_id",
      name: "any_name",
      username: "any_username",
      createdAt: date,
      token: "any_token",
    });
    expect(addUserUseCase.add).toHaveBeenCalledWith({
      ...data,
      password: "any_hashed_password",
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
    expect(bcryptService.hash).toHaveBeenCalledWith(data.password);
  });
});
