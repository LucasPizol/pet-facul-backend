export interface IBcryptHash {
  hash: (value: string) => Promise<string>;
}

export interface IBcryptCompare {
  compare: (value: string, hash: string) => Promise<boolean>;
}
