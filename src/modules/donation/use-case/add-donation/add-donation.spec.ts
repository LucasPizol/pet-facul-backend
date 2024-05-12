import { MockProxy, mock } from "jest-mock-extended";
import { AddDonationUseCase } from "./add-donation";
import {
  IAddCustomer,
  IAddDonationRepository,
  ILoadCustomerByUniqueParams,
} from "./add-donation-protocols";

describe("AddDonationUseCase", () => {
  let addDonationUseCase: AddDonationUseCase;
  let addDonationRepository: MockProxy<IAddDonationRepository>;
  let loadCustomerByUniqueParamsUseCase: MockProxy<ILoadCustomerByUniqueParams>;
  let addCustomerUseCase: MockProxy<IAddCustomer>;

  beforeEach(() => {
    addDonationRepository = mock();
    loadCustomerByUniqueParamsUseCase = mock();

    loadCustomerByUniqueParamsUseCase.loadByUniqueParams.mockResolvedValue({
      id: "any_id",
      document: "any_document",
      name: "any_name",
      email: "any_email",
      phone: "any_phone",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    addDonationRepository.add.mockResolvedValue({
      id: "any_id",
      type: "any_type",
      unit: "any_unit",
      value: 100,
      customerId: "any_customer_id",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    addCustomerUseCase = mock();

    addDonationUseCase = new AddDonationUseCase(
      addDonationRepository,
      loadCustomerByUniqueParamsUseCase,
      addCustomerUseCase
    );
  });

  const data = {
    type: "any_type",
    unit: "any_unit",
    value: 100,
    customerId: "any_customer_id",
    document: "any_document",
    name: "any_name",
    email: "any_email",
    phone: "any_phone",
  };

  it("should be able to add donation with customer existing", async () => {
    const response = await addDonationUseCase.add(data);

    expect(response).toEqual({
      id: "any_id",
      type: "any_type",
      unit: "any_unit",
      value: 100,
      customerId: "any_customer_id",
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });

    expect(
      loadCustomerByUniqueParamsUseCase.loadByUniqueParams
    ).toHaveBeenCalledWith({
      document: "any_document",
    });

    expect(addCustomerUseCase.add).toHaveBeenCalledTimes(0);
    expect(addDonationRepository.add).toHaveBeenCalledWith({
      customerId: "any_id",
      type: "any_type",
      unit: "any_unit",
      value: 100,
    });
  });

  it("should be able to add donation with customer not existing", async () => {
    const response = await addDonationUseCase.add(data);

    loadCustomerByUniqueParamsUseCase.loadByUniqueParams.mockResolvedValue(
      null
    );

    addCustomerUseCase.add.mockResolvedValue({
      id: "any_id",
      document: "any_document",
      name: "any_name",
      email: "any_email",
      phone: "any_phone",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(response).toEqual({
      id: "any_id",
      type: "any_type",
      unit: "any_unit",
      value: 100,
      customerId: "any_customer_id",
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });

    expect(
      loadCustomerByUniqueParamsUseCase.loadByUniqueParams
    ).toHaveBeenCalledWith({
      document: "any_document",
    });

    expect(addCustomerUseCase.add).toHaveBeenCalledTimes(0);
    expect(addDonationRepository.add).toHaveBeenCalledWith({
      customerId: "any_id",
      type: "any_type",
      unit: "any_unit",
      value: 100,
    });
  });
});
