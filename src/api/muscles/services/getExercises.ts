import { MuscleModel } from "../../../models";
import Exercise from "../../exercises/models/Exercise";

export default async function getExercises(muscleId: string): Promise<Exercise[] | null> {
  return await MuscleModel.findById(muscleId)
    .populate("exercises")
    .exec()
    .then((muscle) => muscle?.exercises ?? null);
}
