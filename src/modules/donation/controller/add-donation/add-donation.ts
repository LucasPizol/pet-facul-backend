import {
  IAddCustomerModel,
  IAddDonation,
  IAddDonationModel,
  IController,
  IHttpRequest,
  IHttpResponse,
  badRequest,
  created,
  sendError,
  validateBodyFields,
} from "./add-donation-protocols";

export class AddDonationController implements IController {
  private readonly addDonationUseCase: IAddDonation;

  constructor(addDonationUseCase: IAddDonation) {
    this.addDonationUseCase = addDonationUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) return badRequest(new Error("user"));

      const data = validateBodyFields<IAddDonationModel & IAddCustomerModel>(
        [
          { key: "type", required: true, type: "string" },
          { key: "unit", required: true, type: "string" },
          { key: "value", required: true, type: "number" },
          { key: "phone", required: true, type: "string" },
          { key: "document", required: true, type: "string" },
          { key: "name", required: true, type: "string" },
          { key: "email", required: true, type: "string" },
        ],
        httpRequest.body
      );

      const response = await this.addDonationUseCase.add(data);

      return created(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
