import { prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import User from "../../users/models/User";
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
  type!: string

  @Field(() => ID)
  @prop({ref: () => User})
  user!: Ref<User, string>

  @Field()
  @prop()
  created!: Date
}
