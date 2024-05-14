import {
  IAddCustomer,
  IAddCustomerModel,
  IAddDonation,
  IAddDonationModel,
  IAddDonationRepository,
  ILoadCustomerByUniqueParams,
} from "./add-donation-protocols";

export class AddDonationUseCase implements IAddDonation {
  private readonly addDonationRepository: IAddDonationRepository;
  private readonly loadCustomerByUniqueParamsUseCase: ILoadCustomerByUniqueParams;
  private readonly addCustomerUseCase: IAddCustomer;

  constructor(
    addDonationRepository: IAddDonationRepository,
    loadCustomerByUniqueParamsUseCase: ILoadCustomerByUniqueParams,
    addCustomerUseCase: IAddCustomer
  ) {
    this.addDonationRepository = addDonationRepository;
    this.loadCustomerByUniqueParamsUseCase = loadCustomerByUniqueParamsUseCase;
    this.addCustomerUseCase = addCustomerUseCase;
  }

  async add(data: IAddDonationModel & IAddCustomerModel) {
    const { document, email, name, phone, product, unit, value } = data;

    let customer =
      await this.loadCustomerByUniqueParamsUseCase.loadByUniqueParams({
        document,
      });

    if (!customer) {
      customer = await this.addCustomerUseCase.add({
        document,
        email,
        phone,
        name,
      });
    }

    return await this.addDonationRepository.add({
      product,
      unit,
      value,
      customerId: customer.id,
    });
  }
}
