import {
  IController,
  IHttpRequest,
  IHttpResponse,
  IUpdatePaymentById,
  badRequest,
  ok,
  sendError,
} from "./update-payment-protocols";

export class UpdatePaymentByIdController implements IController {
  private readonly updatePaymentByIdUseCase: IUpdatePaymentById;

  constructor(updatePaymentByIdUseCase: IUpdatePaymentById) {
    this.updatePaymentByIdUseCase = updatePaymentByIdUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user;
      const data = httpRequest.body;
      const params = httpRequest.params;

      if (!user) return badRequest(new Error("User not found"));
      if (!params.id) return badRequest(new Error("Params ID not found"));
      if (data.id !== undefined)
        return badRequest(new Error("Youre trying to update the ID"));

      const response = await this.updatePaymentByIdUseCase.updateById(
        params.id,
        data
      );

      return ok(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
