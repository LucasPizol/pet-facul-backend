import { AuthenticateUserController } from "@/controllers/user/authenticate-user/authenticate-user";
import { UserInfra } from "@/infra/user/user-infra";
import { BcryptService } from "@/services/implementations/bcrypt/bcrypt-service";
import { JWTService } from "@/services/implementations/jwt/jwt-service";
import { AuthenticateUserUseCase } from "@/use-cases/user/authenticate-user/authenticate-user";
import { LoadUserByUniqueParamsUseCase } from "@/use-cases/user/load-user-by-unique-params/load-user-by-unique-params";

export const authenticateUserFactory = () => {
  return new AuthenticateUserController(
    new AuthenticateUserUseCase(
      new LoadUserByUniqueParamsUseCase(new UserInfra()),
      new JWTService(),
      new BcryptService()
    )
  );
};
