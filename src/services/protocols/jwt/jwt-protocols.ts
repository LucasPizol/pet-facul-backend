export interface IJWTSign {
  sign: (value: string, expiresIn: string) => string;
}

export interface IJWTVerify {
  verify: (token: string) => Promise<string | null>;
}
