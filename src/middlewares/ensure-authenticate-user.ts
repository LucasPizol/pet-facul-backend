import { IUserModel } from "@/domain/models/user";
import { ILoadUserByUniqueParams } from "@/domain/use-cases/user/load-user-by-unique-params";
import { UserInfra } from "@/infra/user/user-infra";
import { IHttpRequest } from "@/main/protocols/http";
import { LoadUserByUniqueParamsUseCase } from "@/modules/user/use-case/load-user-by-unique-params/load-user-by-unique-params";
import { JWTService } from "@/services/implementations/jwt/jwt-service";
import { IJWTVerify } from "@/services/protocols/jwt/jwt-protocols";
import { NextFunction, Response } from "express";

class EnsureAuthenticateUser {
  private readonly loadUserByUniqueParamsUseCase: ILoadUserByUniqueParams;
  private readonly jwtService: IJWTVerify;

  constructor(
    loadUserByUniqueParamsUseCase: ILoadUserByUniqueParams,
    jwtService: IJWTVerify
  ) {
    this.loadUserByUniqueParamsUseCase = loadUserByUniqueParamsUseCase;
    this.jwtService = jwtService;
  }

  async handle(request: IHttpRequest, response: Response, next: NextFunction) {
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

      const verifyToken = await this.jwtService.verify<IUserModel>(token);

      if (!verifyToken)
        return response.status(401).json({
          error: "Unauthorized",
        });

      const user = await this.loadUserByUniqueParamsUseCase.loadByUniqueParams({
        id: verifyToken.id,
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
  }
}

export const ensureAuthenticateUser = new EnsureAuthenticateUser(
  new LoadUserByUniqueParamsUseCase(new UserInfra()),
  new JWTService()
).handle;
