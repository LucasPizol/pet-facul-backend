import {
  IUpdatePaymentModel,
  validateBodyFields,
} from "../add-payment/add-payment-protocols";
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
      const params = httpRequest.params;

      if (!user) return badRequest(new Error("User not found"));
      if (!params.id) return badRequest(new Error("Params ID not found"));

      const data = validateBodyFields<IUpdatePaymentModel>(
        [
          { key: "value", required: false, type: "number" },
          { key: "description", required: false, type: "string" },
          { key: "paidAt", required: false, type: "string" },
          { key: "value", required: false, type: "string" },
        ],
        httpRequest.body
      );

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
