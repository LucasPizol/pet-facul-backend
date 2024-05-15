import { MockProxy, mock } from "jest-mock-extended";
import { LoadDonationsUseCase } from "./load-donations";
import {
  ILoadDonations,
  ILoadDonationsRepository,
} from "./load-donations-protocols";

describe("LoadDonationsUseCase", () => {
  let loadDonationsUseCase: ILoadDonations;
  let loadDonationsRepository: MockProxy<ILoadDonationsRepository>;

  beforeEach(() => {
    loadDonationsRepository = mock();

    loadDonationsRepository.load.mockResolvedValueOnce([
      {
        id: "any_id",
        product: "any_product",
        unit: "any_unit",
        value: 10,
        createdAt: new Date(),
        customerId: "any_customer_id",
        updatedAt: new Date(),
      },
    ]);

    loadDonationsUseCase = new LoadDonationsUseCase(loadDonationsRepository);
  });

  it("should load donations", async () => {
    const response = await loadDonationsUseCase.load();

    expect(response).toEqual([
      {
        id: "any_id",
        product: "any_product",
        unit: "any_unit",
        value: 10,
        createdAt: expect.any(Date),
        customerId: "any_customer_id",
        updatedAt: expect.any(Date),
      },
    ]);
  });
});
