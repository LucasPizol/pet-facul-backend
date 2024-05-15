import {
  ILoadPayments,
  ILoadPaymentsRepository,
} from "./load-payments-protocols";

export class LoadPaymentsUseCase implements ILoadPayments {
  private readonly loadPaymentsRepository: ILoadPaymentsRepository;

  constructor(loadPaymentsRepository: ILoadPaymentsRepository) {
    this.loadPaymentsRepository = loadPaymentsRepository;
  }

  async load() {
    return await this.loadPaymentsRepository.load();
  }
}
