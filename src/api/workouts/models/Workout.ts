import { prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import User from "../../users/models/User";
import WorkoutSet from "../../workoutsets/models/WorkoutSet";

@ObjectType({ description: "Workout model" })
export default class Workout {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  name!: string;

  @Field()
  @prop()
  description!: string;

  @Field(() => [ID])
  @prop({ ref: () => WorkoutSet })
  workoutSets!: Ref<WorkoutSet, string>[];

  @Field(() => [ID])
  @prop({ ref: () => User })
  author!: Ref<User, string>;
}
