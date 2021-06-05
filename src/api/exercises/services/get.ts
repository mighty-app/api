import { ExerciseModel } from "../../../models";
import Exercise from "../models/Exercise";

export default async function getExercise(exerciseId: string): Promise<Exercise | null> {
  return await ExerciseModel.findById(exerciseId);
}
