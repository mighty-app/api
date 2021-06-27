import { prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import Workout from "../../workouts/models/Workout";

/**
 * @tsoaModel
 */

@ObjectType({description: "Program model"})
export default class Program {
  @Field(() => ID)
  @prop({ref: () => Program})
  id!: string

  @Field()
  @prop()
  name!: string

  @Field(() => ID)
  @prop({ref: () => Workout})
  workouts?: Ref<Workout, string>[]
}
