import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "Level model" })
export default class Level {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  number!: number;

  @Field()
  @prop()
  graphic!: string;

  @Field()
  @prop()
  minXp!: number;

  @Field()
  @prop()
  maxXp!: number;
}
