import { TokenType } from "./TokenType";

export interface SafeMightyToken {
  id: string;
  name: string;
  type: TokenType;
  created: Date
}

export class RealSafeMightyToken implements SafeMightyToken {
  readonly id: string;
  readonly name: string;
  readonly type: TokenType;
  readonly created: Date;

  constructor(id: string, name: string, type: TokenType, created: Date) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.created = created
  }
}
