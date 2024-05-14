import {
  IController,
  IHttpRequest,
  IHttpResponse,
  ILoadPayments,
  badRequest,
  ok,
  sendError,
} from "./load-payments-protocols";

export class LoadPaymentsController implements IController {
  private readonly loadPaymentsUseCase: ILoadPayments;

  constructor(loadPaymentsUseCase: ILoadPayments) {
    this.loadPaymentsUseCase = loadPaymentsUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) return badRequest(new Error("User not found"));

      const response = await this.loadPaymentsUseCase.load();

      return ok(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
