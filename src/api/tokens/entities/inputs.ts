import { TokenType } from "./TokenType";

export interface CreateMightyTokenInput {
  name: string;
  type: TokenType;
  userId: string;
}
