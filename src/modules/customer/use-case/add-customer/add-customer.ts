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
    const document = data.document.replace(/[^0-9]/g, "");

    return await this.addCustomerRepository.add({
      ...data,
      document,
    });
  }
}
