import { WorkoutModel } from "../../../models";
import Workout from "../models/Workout";

export default async function get(workoutId: string): Promise<Workout | null> {
  return await WorkoutModel.findById(workoutId);
}
