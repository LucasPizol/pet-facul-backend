import {
  IAddCustomer,
  IAddCustomerModel,
  IAddCustomerRepository,
  ICustomerModel,
} from "./add-customer-protocols";

export class AddCustomerUseCase implements IAddCustomer {
  private readonly addCustomerRepository: IAddCustomerRepository;

  constructor(addCustomerRepository: IAddCustomerRepository) {
    this.addCustomerRepository = addCustomerRepository;
  }

  async add(data: IAddCustomerModel): Promise<ICustomerModel> {
    return await this.addCustomerRepository.add(data);
  }
}
