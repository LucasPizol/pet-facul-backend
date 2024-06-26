import {
  ICustomerUniqueParamsModel,
  ILoadCustomerByUniqueParams,
  ILoadCustomerByUniqueParamsRepository,
} from "./load-customer-by-unique-params-protocols";

export class LoadCustomerByUniqueParamsUseCase
  implements ILoadCustomerByUniqueParams
{
  private readonly loadCustomerByUniqueParamsRepository: ILoadCustomerByUniqueParamsRepository;

  constructor(
    loadCustomerByUniqueParamsRepository: ILoadCustomerByUniqueParamsRepository
  ) {
    this.loadCustomerByUniqueParamsRepository =
      loadCustomerByUniqueParamsRepository;
  }

  async loadByUniqueParams(params: ICustomerUniqueParamsModel) {
    const document = params.document
      ? params.document.replace(/[^0-9]/g, "")
      : undefined;

    return await this.loadCustomerByUniqueParamsRepository.loadByUniqueParams({
      ...params,
      document,
    });
  }
}
