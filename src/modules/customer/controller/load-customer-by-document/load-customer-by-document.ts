import {
  IController,
  IHttpRequest,
  IHttpResponse,
  ILoadCustomerByUniqueParams,
  badRequest,
  ok,
  sendError,
} from "./load-customer-by-document-protocols";

export class LoadCustomerByDocumentController implements IController {
  private readonly loadCustomerByUniqueParamsUseCase: ILoadCustomerByUniqueParams;

  constructor(loadCustomerByUniqueParamsUseCase: ILoadCustomerByUniqueParams) {
    this.loadCustomerByUniqueParamsUseCase = loadCustomerByUniqueParamsUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user;
      const params = httpRequest.params;

      if (!user) return badRequest(new Error("User not found"));
      if (!params.document) return badRequest(new Error("Id not found"));

      const response =
        await this.loadCustomerByUniqueParamsUseCase.loadByUniqueParams({
          document: params.document,
        });

      return ok(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
