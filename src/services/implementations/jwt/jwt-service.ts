import env from "@/main/config/env";
import { IJWTSign, IJWTVerify } from "@/services/protocols/jwt/jwt-protocols";
import jwt from "jsonwebtoken";

export class JWTService implements IJWTSign, IJWTVerify {
  private readonly secret: string;

  constructor() {
    const secret = env.jwtSecret;

    if (!secret) {
      throw new Error("JWT secret not found");
    }

    this.secret = secret;
  }

  sign(value: any, expiresIn: string): string {
    return jwt.sign({ value }, this.secret, {
      expiresIn,
    });
  }

  verify<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, this.secret, (error, decoded) => {
        if (error || !decoded) {
          resolve(null);
        } else {
          resolve(decoded as T);
        }
      });
    });
  }
}
