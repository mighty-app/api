import { MightyWorkoutNotFound } from "../../../errors";
import { MightyWorkoutModel, MightyWorkoutSetModel } from "../../../models";
import MightyWorkoutSet from "../models/MightyWorkoutSet";

export default async function createMighty(reps: number, pounds: number, workoutId: string): Promise<MightyWorkoutSet> {
  try {
    const mightyWorkout = await MightyWorkoutModel.findById(workoutId);

    if (!mightyWorkout) throw new MightyWorkoutNotFound();

    const mightyWorkoutSet = await MightyWorkoutSetModel.create({
      reps,
      pounds,
      workout: workoutId,
      timestamp: new Date()
    });

    if (mightyWorkout.workoutSets) mightyWorkout.workoutSets.push(mightyWorkoutSet.id);
    else mightyWorkout.workoutSets = [mightyWorkoutSet.id];

    return mightyWorkoutSet;
  } catch (error) {
    throw error;
  }
}
