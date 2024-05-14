import { badRequest, ok, sendError } from "@/main/helpers/http";
import { IController } from "@/main/protocols/controller";
import { IHttpRequest, IHttpResponse } from "@/main/protocols/http";
import { validateBodyFields } from "../add-donation/add-donation-protocols";
import {
  IUpdateDonationById,
  IUpdateDonationModel,
} from "./update-donation-by-id-protocols";

export class UpdateDonationByIdController implements IController {
  private readonly updateDonationByIdUseCase: IUpdateDonationById;

  constructor(updateDonationByIdUseCase: IUpdateDonationById) {
    this.updateDonationByIdUseCase = updateDonationByIdUseCase;
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const user = httpRequest.user;
      const params = httpRequest.params;

      if (!user) return badRequest(new Error("User not found"));
      if (!params.id) return badRequest(new Error("Params ID not found"));

      const data = validateBodyFields<IUpdateDonationModel>(
        [
          { key: "value", required: false, type: "number" },
          { key: "product", required: false, type: "string" },
          { key: "unit", required: false, type: "string" },
        ],
        httpRequest.body
      );

      const response = await this.updateDonationByIdUseCase.updateById(
        params.id,
        data
      );

      return ok(response);
    } catch (error) {
      return sendError(error);
    }
  }
}
