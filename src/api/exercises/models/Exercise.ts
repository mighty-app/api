import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import Muscle from "../../muscles/models/Muscle";
import Equipment from "./Equipment";
import ExerciseType from "./ExerciseType";

@ObjectType({ description: "Exercise model" })
export default class Exercise {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  name!: string;

  @Field()
  @prop({ enum: ExerciseType })
  type!: string;

  @Field()
  @prop({ enum: Equipment })
  equipment!: string;

  @Field()
  @prop()
  instructions!: string;

  @Field()
  @prop()
  xp!: number;

  @Field(() => [Muscle])
  @prop({ ref: () => Muscle })
  muscles!: Muscle[];
}
