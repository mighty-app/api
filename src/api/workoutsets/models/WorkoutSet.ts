import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import Exercise from "../../exercises/models/Exercise";

@ObjectType({ description: "Workout set model" })
export default class WorkoutSet {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  reps!: number;

  @Field(() => Exercise)
  @prop({ ref: () => Exercise })
  exercise!: Exercise;
}
