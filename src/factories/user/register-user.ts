import { UserInfra } from "@/infra/user/user-infra";
import { RegisterUserController } from "@/modules/user/controller/register-user/register-user";
import { AddUserUseCase } from "@/modules/user/use-case/add-user/add-user";
import { RegisterUserUseCase } from "@/modules/user/use-case/register-user/register-user";
import { BcryptService } from "@/services/implementations/bcrypt/bcrypt-service";
import { JWTService } from "@/services/implementations/jwt/jwt-service";

export const registerUserFactory = (): RegisterUserController => {
  return new RegisterUserController(
    new RegisterUserUseCase(
      new AddUserUseCase(new UserInfra()),
      new BcryptService(),
      new JWTService()
    )
  );
};
