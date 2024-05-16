import {
  IAddPayment,
  IAddPaymentModel,
  IController,
  IHttpRequest,
  IHttpResponse,
  badRequest,
  created,
  sendError,
  validateBodyFields
} from './add-payment-protocols'

export class AddPaymentController implements IController {
  private readonly addPaymentUseCase: IAddPayment

  constructor(addPaymentUseCase: IAddPayment) {
    this.addPaymentUseCase = addPaymentUseCase
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user

      if (!user) return badRequest(new Error('user'))

      const data = validateBodyFields<IAddPaymentModel>(
        [
          {
            key: 'value',
            required: true,
            type: 'number'
          },
          {
            key: 'description',
            required: false,
            type: 'string'
          },
          {
            key: 'type',
            required: true,
            type: 'string'
          },
          {
            key: 'deadline',
            required: true,
            type: 'string'
          }
        ],
        httpRequest.body
      )

      const response = await this.addPaymentUseCase.add(data)

      return created(response)
    } catch (error) {
      return sendError(error)
    }
  }
}
