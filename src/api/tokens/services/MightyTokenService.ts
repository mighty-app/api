import { TokenType } from "../entities/TokenType";
import createMighty from "./createMighty";

interface MightyTokenService {
  createMightyToken(name: string, type: TokenType, userId: string): Promise<string | null>
}

export default class RealMightyTokenService implements MightyTokenService {
  public async createMightyToken(name: string, type: TokenType, userId: string): Promise<string | null> {
    return await createMighty(name, type, userId)
  }
}
