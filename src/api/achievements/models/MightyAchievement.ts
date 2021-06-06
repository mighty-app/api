import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import User from "../../users/models/User";
import Achievement from "./Achievement";

@ObjectType({ description: "Mighty achievement model" })
export default class MightyAchievement {
  @Field(() => ID)
  id!: string;

  @Field(() => Achievement)
  @prop({ ref: () => Achievement })
  achievement!: Achievement;

  @Field(() => User)
  @prop({ ref: () => User })
  user!: User;

  @Field()
  @prop()
  timestamp!: Date;
}
