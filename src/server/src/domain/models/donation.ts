export interface IDonationModel {
  id: string;
  product: string;
  unit: string;
  customerId: string;
  value: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAddDonationModel {
  product: string;
  unit: string;
  value: number;
  customerId: string;
}

export interface IUpdateDonationModel {
  product: string;
  unit: string;
  value: number;
}
