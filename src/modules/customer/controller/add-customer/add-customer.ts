import {
  IAddCustomer,
  IAddCustomerModel,
  IController,
  IHttpRequest,
  IHttpResponse,
  badRequest,
  created,
  sendError,
  validateBodyFields,
} from "./add-customer-protocols";

export class AddCustomerController implements IController {
  private readonly addCustomerUseCase: IAddCustomer;

  constructor(addCustomerUseCase: IAddCustomer) {
    this.addCustomerUseCase = addCustomerUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) return badRequest(new Error("user"));

      const data = validateBodyFields<IAddCustomerModel>(
        [
          { key: "name", type: "string", required: true },
          { key: "document", type: "string", required: true },
          { key: "email", type: "string", required: true },
          { key: "phone", type: "string", required: true },
        ],
        httpRequest.body
      );

      const response = await this.addCustomerUseCase.add(data);

      return created(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
