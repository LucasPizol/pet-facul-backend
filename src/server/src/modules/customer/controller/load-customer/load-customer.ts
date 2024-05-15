import {
  IController,
  IHttpRequest,
  IHttpResponse,
  ILoadCustomer,
  badRequest,
  ok,
  sendError
} from './load-customer-protocols'

export class LoadCustomerController implements IController {
  private readonly loadCustomerUseCase: ILoadCustomer

  constructor(loadCustomerUseCase: ILoadCustomer) {
    this.loadCustomerUseCase = loadCustomerUseCase
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user

      if (!user) return badRequest(new Error('User not found'))

      const response = await this.loadCustomerUseCase.load()

      return ok(response)
    } catch (error) {
      return sendError(error)
    }
  }
}
