export interface IDonationModel {
  id: string;
  type: string;
  unit: string;
  customerId: string;
  value: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAddDonationModel {
  type: string;
  unit: string;
  value: number;
  customerId: string;
}
