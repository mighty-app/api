import { DocumentType, prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import User from "../../users/models/User";
import { RealSafeMightyToken, SafeMightyToken } from "../entities/SafeMightyToken";
import { TokenType } from "../entities/TokenType";

@ObjectType({description: 'Mighty token model'})
export default class MightyToken {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  name!: string;

  @Field()
  @prop()
  token!: string;

  @Field()
  @prop({enum: TokenType})
  type!: TokenType

  @Field(() => ID)
  @prop({ref: () => User})
  user!: Ref<User, string>

  @Field()
  @prop()
  created!: Date

  public toSafeMightyToken(this: DocumentType<MightyToken>): SafeMightyToken {
    return new RealSafeMightyToken(
      this.id,
      this.name,
      this.type,
      this.created
    )
  }
}
