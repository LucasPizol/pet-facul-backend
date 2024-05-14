export interface IDeleteDonationById {
  deleteById(id: string): Promise<void>;
}
