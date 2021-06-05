import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ExerciseModel } from "../../../models";
import Equipment from "../models/Equipment";
import Exercise from "../models/Exercise";
import ExerciseType from "../models/ExerciseType";
import RealExerciseMutation from "../mutations/ExerciseMutation";

@Resolver((_of) => Exercise)
export default class ExerciseResolver {
  @Query(() => Exercise, { nullable: true })
  async exercise(@Arg("id") id: string): Promise<Exercise | null> {
    return await ExerciseModel.findById(id);
  }

  @Query(() => [Exercise], { description: "Get all exercises" })
  async exercises(): Promise<Exercise[]> {
    return await ExerciseModel.find();
  }

  @Mutation(() => Exercise)
  async createExercise(
    @Arg("name") name: string,
    @Arg("type") type: ExerciseType,
    @Arg("equipment") equipment: Equipment,
    @Arg("instructions") instructions: string,
    @Arg("xp") xp: number
  ): Promise<Exercise> {
    return await new RealExerciseMutation().createExercise(name, type, equipment, instructions, xp);
  }
}
