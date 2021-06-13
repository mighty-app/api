import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
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

  @Field(() => [WorkoutSet])
  @prop({ ref: () => WorkoutSet })
  workoutSets!: WorkoutSet[];
}
