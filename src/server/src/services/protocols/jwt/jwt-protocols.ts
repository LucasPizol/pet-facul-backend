export interface IJWTSign {
  sign: (value: any, expiresIn: string) => string;
}

export interface IJWTVerify {
  verify: <T>(token: string) => Promise<T | null>;
}
