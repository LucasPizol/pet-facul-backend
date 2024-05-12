import {
  IAddUserModel,
  IController,
  IHttpRequest,
  IHttpResponse,
  IRegisterUser,
  ok,
  sendError,
  validateBodyFields,
} from "./register-user-protocols";

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

      return ok(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
