import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import Exercise from "../../exercises/models/Exercise";

@ObjectType({ description: "Muscle model" })
export default class Muscle {
  @Field(() => ID)
  id!: string;

  @Field()
  @prop()
  name!: string;

  @Field(() => [Exercise])
  @prop({ ref: () => Exercise })
  exercises!: Exercise[];
}
