import { IAuthenticateUserModel } from "@/domain/models/user";
import { IAuthenticateUser } from "@/domain/use-cases/user/authenticate-user";
import { ok, sendError } from "@/main/helpers/http";
import { IController } from "@/main/protocols/controller";
import { IHttpRequest, IHttpResponse } from "@/main/protocols/http";
import { validateBodyFields } from "@/utils/validate-body-fields";

export class AuthenticateUserController implements IController {
  private readonly authenticateUserUseCase: IAuthenticateUser;

  constructor(authenticateUserUseCase: IAuthenticateUser) {
    this.authenticateUserUseCase = authenticateUserUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const data = validateBodyFields<IAuthenticateUserModel>(
        [
          {
            key: "username",
            required: true,
            type: "string",
          },
          {
            key: "password",
            required: true,
            type: "string",
          },
        ],
        httpRequest.body
      );

      const response = await this.authenticateUserUseCase.authenticate(data);

      return ok(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
