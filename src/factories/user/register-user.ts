import { RegisterUserController } from "@/controllers/user/register-user/register-user";
import { UserInfra } from "@/infra/user/user-infra";
import { BcryptService } from "@/services/implementations/bcrypt/bcrypt-service";
import { JWTService } from "@/services/implementations/jwt/jwt-service";
import { AddUserUseCase } from "@/use-cases/user/add-user/add-user";
import { RegisterUserUseCase } from "@/use-cases/user/register-user/register-user";

export const registerUserFactory = (): RegisterUserController => {
  return new RegisterUserController(
    new RegisterUserUseCase(
      new AddUserUseCase(new UserInfra()),
      new BcryptService(),
      new JWTService()
    )
  );
};
