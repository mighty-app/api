import { prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import MightyWorkout from "../../workouts/models/MightyWorkout";

@ObjectType({ description: "Mighty workout set model" })
export default class MightyWorkoutSet {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  reps!: number;

  @Field()
  @prop()
  pounds!: number;

  @Field()
  @prop()
  timestamp!: Date;

  @Field(() => ID)
  @prop({ ref: () => MightyWorkout })
  workout!: Ref<MightyWorkout, string>;
}
