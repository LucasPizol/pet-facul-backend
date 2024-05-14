import {
  IUpdatePaymentById,
  IUpdatePaymentByIdRepository,
} from "./update-payment-protocols";

export class UpdatePaymentByIdUseCase implements IUpdatePaymentById {
  private readonly updatePaymentByIdRepository: IUpdatePaymentByIdRepository;

  constructor(updatePaymentByIdRepository: IUpdatePaymentByIdRepository) {
    this.updatePaymentByIdRepository = updatePaymentByIdRepository;
  }

  async updateById(id: string, data: any) {
    return await this.updatePaymentByIdRepository.updateById(id, data);
  }
}
