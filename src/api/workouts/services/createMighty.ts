import { MightyWorkoutModel } from "../../../models";
import MightyWorkout from "../models/MightyWorkout";

export default async function createMighty(userId: string, workoutId?: string): Promise<MightyWorkout> {
  return await MightyWorkoutModel.create({ user: userId, workout: workoutId, start: new Date() });
}
