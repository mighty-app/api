import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "Achievement model" })
export default class Achievement {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  name!: string;

  @Field()
  @prop()
  description!: string;

  @Field()
  @prop()
  graphic!: string;
}
