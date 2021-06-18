import { prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import Exercise from "../../exercises/models/Exercise";

@ObjectType({ description: "Workout set model" })
export default class WorkoutSet {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  reps!: number;

  @Field(() => ID)
  @prop({ ref: () => Exercise })
  exercise!: Ref<Exercise, string>;
}
