import { badRequest, noContent, sendError } from "@/main/helpers/http";
import { IController } from "@/main/protocols/controller";
import { IHttpRequest, IHttpResponse } from "@/main/protocols/http";
import { IDeleteDonationById } from "./delete-donation-by-id-protocols";

export class DeleteDonationByIdController implements IController {
  private readonly deleteDonationByIdUseCase: IDeleteDonationById;

  constructor(deleteDonationByIdUseCase: IDeleteDonationById) {
    this.deleteDonationByIdUseCase = deleteDonationByIdUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user;
      const id = httpRequest.params.id;

      if (!user) return badRequest(new Error("User not found"));
      if (!id) return badRequest(new Error("Params ID not found"));

      await this.deleteDonationByIdUseCase.deleteById(id);

      return noContent();
    } catch (error) {
      return sendError(error);
    }
  }
}
