import {
  IAuthenticateUser,
  IAuthenticateUserModel,
  IController,
  IHttpRequest,
  IHttpResponse,
  ok,
  sendError,
  validateBodyFields,
} from "./authenticate-user-protocols";

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
