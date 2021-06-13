import { prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import User from "../../users/models/User";
import MightyWorkoutSet from "../../workoutsets/models/MightyWorkoutSet";
import Workout from "./Workout";

@ObjectType({ description: "Mighty workout model" })
export default class MightyWorkout {
  @Field(() => ID)
  id!: string;

  @Field(() => ID)
  @prop({ ref: () => User })
  user!: Ref<User, string>;

  @Field(() => ID)
  @prop({ ref: () => Workout })
  workout?: Ref<Workout, string>;

  @Field(() => [ID])
  @prop({ ref: () => MightyWorkoutSet })
  workoutSets?: Ref<MightyWorkoutSet, string>[];

  @Field()
  @prop()
  start!: Date;

  @Field()
  @prop()
  end?: Date;
}
