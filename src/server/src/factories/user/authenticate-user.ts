import { UserInfra } from "@/infra/user/user-infra";
import { AuthenticateUserController } from "@/modules/user/controller/authenticate-user/authenticate-user";
import { AuthenticateUserUseCase } from "@/modules/user/use-case/authenticate-user/authenticate-user";
import { LoadUserByUniqueParamsUseCase } from "@/modules/user/use-case/load-user-by-unique-params/load-user-by-unique-params";
import { BcryptService } from "@/services/implementations/bcrypt/bcrypt-service";
import { JWTService } from "@/services/implementations/jwt/jwt-service";

export const authenticateUserFactory = () => {
  return new AuthenticateUserController(
    new AuthenticateUserUseCase(
      new LoadUserByUniqueParamsUseCase(new UserInfra()),
      new JWTService(),
      new BcryptService()
    )
  );
};
