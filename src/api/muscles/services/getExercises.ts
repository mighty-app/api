import { DocumentType } from "@typegoose/typegoose";
import { MuscleModel } from "../../../models";
import Exercise from "../../exercises/models/Exercise";
import Muscle from "../models/Muscle";

export default async function getExercises(muscleId: string): Promise<Exercise[] | null> {
  return await MuscleModel.findById(muscleId)
    .populate("exercises")
    .exec()
    .then((muscle: DocumentType<Muscle> | null) => muscle?.exercises ?? null);
}
