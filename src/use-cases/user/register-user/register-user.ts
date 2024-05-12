import {
  IAddUser,
  IAddUserModel,
  IBcryptHash,
  IJWTSign,
  IRegisterUser,
} from "./register-user-protocols";

export class RegisterUserUseCase implements IRegisterUser {
  private readonly addUserUseCase: IAddUser;
  private readonly bcryptService: IBcryptHash;
  private readonly jwtService: IJWTSign;

  constructor(
    addUserUseCase: IAddUser,
    bcryptService: IBcryptHash,
    jwtService: IJWTSign
  ) {
    this.addUserUseCase = addUserUseCase;
    this.bcryptService = bcryptService;
    this.jwtService = jwtService;
  }

  async register(data: IAddUserModel) {
    const hashedPassword = await this.bcryptService.hash(data.password);

    const user = await this.addUserUseCase.add({
      ...data,
      password: hashedPassword,
    });

    const userWithoutPassword = {
      ...user,
      password: undefined,
    };

    const token = this.jwtService.sign(userWithoutPassword, "1d");

    return { ...userWithoutPassword, token };
  }
}
