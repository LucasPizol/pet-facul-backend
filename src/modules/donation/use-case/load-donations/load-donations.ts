import {
  ILoadDonations,
  ILoadDonationsRepository,
} from "./load-donations-protocols";

export class LoadDonationsUseCase implements ILoadDonations {
  private readonly loadDonationsRepository: ILoadDonationsRepository;

  constructor(loadDonationsRepository: ILoadDonationsRepository) {
    this.loadDonationsRepository = loadDonationsRepository;
  }

  async load() {
    return await this.loadDonationsRepository.load();
  }
}
