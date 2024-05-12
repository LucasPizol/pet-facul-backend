import { Response } from "express";
import { IController } from "../protocols/controller";
import { IHttpRequest } from "../protocols/http";

export const routeAdapter = (controller: IController) => {
  return async (req: IHttpRequest, res: Response) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
      user: req.user,
    };

    const httpResponse = await controller.handle(httpRequest);

    const { statusCode, body } = httpResponse;

    res.status(statusCode);

    if (statusCode >= 200 && statusCode <= 200) {
      return res.json(body);
    }

    if (statusCode >= 400 && statusCode < 500) {
      return res.json(body.message);
    }

    if (statusCode >= 500) {
      return res.json(body);
    }
  };
};
