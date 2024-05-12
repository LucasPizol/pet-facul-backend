import { IAddUserModel } from "@/domain/models/user";
import { IRegisterUser } from "@/domain/use-cases/user/register-user";
import { created, sendError } from "@/main/helpers/http";
import { IController } from "@/main/protocols/controller";
import { IHttpRequest, IHttpResponse } from "@/main/protocols/http";
import { validateBodyFields } from "@/utils/validate-body-fields";

export class RegisterUserController implements IController {
  private readonly registerUserUseCase: IRegisterUser;

  constructor(registerUserUseCase: IRegisterUser) {
    this.registerUserUseCase = registerUserUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const data = validateBodyFields<IAddUserModel>(
        [
          { key: "name", required: true, type: "string" },
          { key: "username", required: true, type: "string" },
          { key: "password", required: true, type: "string" },
        ],
        httpRequest.body
      );

      const response = await this.registerUserUseCase.register(data);

      return created(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
