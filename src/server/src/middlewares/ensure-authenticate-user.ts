import { IUserModel } from "@/domain/models/user";
import { CustomerInfra } from "@/infra/customer/customer-infra";
import { prismaHelper } from "@/infra/prisma/prisma-helper";
import { IHttpRequest } from "@/main/protocols/http";
import { LoadCustomerByUniqueParamsUseCase } from "@/modules/customer/use-case/load-customer-by-unique-params/load-customer-by-unique-params";
import { JWTService } from "@/services/implementations/jwt/jwt-service";
import { NextFunction, Response } from "express";

export const ensureAuthenticateUser = async (
  request: IHttpRequest,
  response: Response,
  next: NextFunction
) => {
  try {
    const header = request.headers;

    if (!header.authorization)
      return response.status(401).json({
        error: "Unauthorized",
      });

    const [, token] = header.authorization.split(" ");
    if (!token)
      return response.status(401).json({
        error: "Unauthorized",
      });

    const verifyToken = await new JWTService().verify<IUserModel>(token);

    if (!verifyToken)
      return response.status(401).json({
        error: "Unauthorized",
      });


    const user = await prismaHelper.user.findUnique({
      where: {
        id: verifyToken.id,
      },
    });

    request.user = {
      ...user,
      password: undefined,
    };

    next();
  } catch (error) {
    return response.status(401).json({
      error: "Unauthorized",
    });
  }
};
