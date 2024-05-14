import {
  IAddPayment,
  IAddPaymentModel,
  IAddPaymentRepository,
} from "./add-payment-protocols";

export class AddPaymentUseCase implements IAddPayment {
  private readonly addPaymentRepository: IAddPaymentRepository;

  constructor(addPaymentRepository: IAddPaymentRepository) {
    this.addPaymentRepository = addPaymentRepository;
  }

  async add(data: IAddPaymentModel) {
    return await this.addPaymentRepository.add(data);
  }
}
