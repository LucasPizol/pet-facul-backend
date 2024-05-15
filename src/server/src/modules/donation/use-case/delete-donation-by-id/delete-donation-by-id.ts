import {
  IDeleteDonationById,
  IDeleteDonationByIdRepository,
} from "./delete-donation-by-id-protocols";

export class DeleteDonationByIdUseCase implements IDeleteDonationById {
  private readonly deleteDonationByIdRepository: IDeleteDonationByIdRepository;

  constructor(deleteDonationByIdRepository: IDeleteDonationByIdRepository) {
    this.deleteDonationByIdRepository = deleteDonationByIdRepository;
  }

  async deleteById(id: string) {
    await this.deleteDonationByIdRepository.deleteById(id);
  }
}
