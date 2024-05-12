import {
  IBcryptCompare,
  IBcryptHash,
} from "@/services/protocols/bcrypt/bcrypt-protocols";
import bcrypt from "bcrypt";

export class BcryptService implements IBcryptCompare, IBcryptHash {
  async compare(value: string, hash: string) {
    return await bcrypt.compare(value, hash);
  }

  async hash(value: string) {
    return await bcrypt.hash(value, 10);
  }
}
