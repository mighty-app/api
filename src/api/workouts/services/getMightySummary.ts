import { DocumentType } from "@typegoose/typegoose";
import { MightyWorkoutModel } from "../../../models";
import MightyWorkoutSet from "../../workoutsets/models/MightyWorkoutSet";
import { MightyWorkoutSummary, RealMightyWorkoutSummary } from "../entities/MightyWorkoutSummary";
import MightyWorkout from "../models/MightyWorkout";

export default async function getMightySummary(mightyWorkoutId: string): Promise<MightyWorkoutSummary | null> {
  try {
    const mightyWorkout = await MightyWorkoutModel.findById(mightyWorkoutId)

    if (!mightyWorkout) throw new Error()
    if (!mightyWorkout.end) throw new Error()

    const workoutSets = await mightyWorkout.populate("workoutSets").execPopulate().then((mightyWorkout: DocumentType<MightyWorkout> | null) => mightyWorkout?.workoutSets ?? null) as MightyWorkoutSet[]
    const totalPoundsLifted = calcTotalPoundsLifted(workoutSets)

    const mightySummary = new RealMightyWorkoutSummary(mightyWorkout.start, mightyWorkout.end, totalPoundsLifted)
    return mightySummary

  } catch(error){
    throw error
  }
}

function calcTotalPoundsLifted(workoutSets: MightyWorkoutSet[]): number {
  return workoutSets.reduce((totalPoundsLifted: number, workoutSet: MightyWorkoutSet) => totalPoundsLifted += (workoutSet.pounds * workoutSet.reps), 0)
}
