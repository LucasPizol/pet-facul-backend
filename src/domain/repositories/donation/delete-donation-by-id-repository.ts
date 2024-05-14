export interface IDeleteDonationByIdRepository {
  deleteById(id: string): Promise<void>;
}
