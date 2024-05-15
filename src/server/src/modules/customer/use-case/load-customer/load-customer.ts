import { ILoadCustomer, ILoadCustomerRepository } from './load-customer-protocols'

export class LoadCustomerUseCase implements ILoadCustomer {
  private readonly loadCustomerRepository: ILoadCustomerRepository

  constructor(loadCustomerRepository: ILoadCustomerRepository) {
    this.loadCustomerRepository = loadCustomerRepository
  }

  async load() {
    return await this.loadCustomerRepository.load()
  }
}
