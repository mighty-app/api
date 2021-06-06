import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import User from "../../users/models/User";
import Workout from "./Workout";

@ObjectType({ description: "Mighty workout model" })
export default class MightyWorkout {
  @Field(() => ID)
  id!: string;

  @Field(() => ID)
  @prop({ ref: () => User })
  user!: string;

  @Field(() => Workout)
  @prop({ ref: () => Workout })
  workout?: string;

  @Field()
  @prop()
  start!: Date;

  @Field()
  @prop()
  end?: Date;
}
