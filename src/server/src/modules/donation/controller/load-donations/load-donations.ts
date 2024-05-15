import {
  IController,
  IHttpRequest,
  IHttpResponse,
  ILoadDonations,
  badRequest,
  ok,
  sendError,
} from "./load-donations-protocols";

export class LoadDonationsController implements IController {
  private readonly loadDonationsUseCase: ILoadDonations;

  constructor(loadDonationsUseCase: ILoadDonations) {
    this.loadDonationsUseCase = loadDonationsUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) return badRequest(new Error("User not found"));

      const response = await this.loadDonationsUseCase.load();

      return ok(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
