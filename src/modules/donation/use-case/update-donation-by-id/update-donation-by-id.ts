import {
  IUpdateDonationById,
  IUpdateDonationByIdRepository,
  IUpdateDonationModel,
} from "./update-donation-by-id-protocols";

export class UpdateDonationByIdUseCase implements IUpdateDonationById {
  private readonly updateDonationByIdRepository: IUpdateDonationByIdRepository;

  constructor(updateDonationByIdRepository: IUpdateDonationByIdRepository) {
    this.updateDonationByIdRepository = updateDonationByIdRepository;
  }

  async updateById(id: string, data: Partial<IUpdateDonationModel>) {
    return await this.updateDonationByIdRepository.updateById(id, data);
  }
}
