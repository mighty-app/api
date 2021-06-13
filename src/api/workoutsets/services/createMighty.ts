import { MightyWorkoutSetModel } from "../../../models";
import MightyWorkoutSet from "../models/MightyWorkoutSet";

export default async function createMighty(reps: number, pounds: number, workoutId: string): Promise<MightyWorkoutSet> {
  return await MightyWorkoutSetModel.create({ reps, pounds, workout: workoutId, timestamp: new Date() });
}
