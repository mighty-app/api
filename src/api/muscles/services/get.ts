import { MuscleModel } from "../../../models";
import Muscle from "../models/Muscle";

export default async function getMuscle(muscleId: string): Promise<Muscle | null> {
  return await MuscleModel.findById(muscleId);
}
