export interface IJWTSign {
  sign: (value: any, expiresIn: string) => string;
}

export interface IJWTVerify {
  verify: (token: string) => Promise<string | null>;
}
