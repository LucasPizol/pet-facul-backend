import { IAuthenticateUser } from "@/domain/use-cases/user/authenticate-user";
import { ILoadUserByUniqueParams } from "../load-user-by-unique-params/load-user-by-unique-params-protocols";
import {
  IAuthenticateUserModel,
  IBcryptCompare,
  IJWTSign,
} from "../register-user/register-user-protocols";

export class AuthenticateUserUseCase implements IAuthenticateUser {
  private readonly loadUserByUniqueParamsUseCase: ILoadUserByUniqueParams;
  private readonly jwtService: IJWTSign;
  private readonly bcryptService: IBcryptCompare;

  constructor(
    loadUserByUniqueParamsUseCase: ILoadUserByUniqueParams,
    jwtService: IJWTSign,
    bcryptService: IBcryptCompare
  ) {
    this.loadUserByUniqueParamsUseCase = loadUserByUniqueParamsUseCase;
    this.jwtService = jwtService;
    this.bcryptService = bcryptService;
  }

  async authenticate(data: IAuthenticateUserModel) {
    const user = await this.loadUserByUniqueParamsUseCase.loadByUniqueParams({
      username: data.username,
    });

    if (!user) throw new Error("User not found");

    const isValidPassword = await this.bcryptService.compare(
      data.password,
      user.password
    );

    if (!isValidPassword) throw new Error("Invalid password");

    const userWithoutPassword = {
      ...user,
      password: undefined,
    };

    const token = this.jwtService.sign(userWithoutPassword, "1d");

    return { ...userWithoutPassword, token };
  }
}
