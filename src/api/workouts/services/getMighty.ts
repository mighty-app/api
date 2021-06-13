import { MightyWorkoutModel } from "../../../models";
import MightyWorkout from "../models/MightyWorkout";

export default async function getMighty(mightyWorkoutId: string): Promise<MightyWorkout | null> {
  return await MightyWorkoutModel.findById(mightyWorkoutId);
}
