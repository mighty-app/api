import { ExerciseModel } from "../../../models";
import Exercise from "../models/Exercise";

export default async function getExercises(): Promise<Exercise[] | null> {
  return await ExerciseModel.find();
}
