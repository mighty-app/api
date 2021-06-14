import { WorkoutModel } from "../../../models";
import Workout from "../models/Workout";

export default async function create(name: string, description: string, workoutSets: string[]): Promise<Workout> {
  return await WorkoutModel.create({ name, description, workoutSets });
}
