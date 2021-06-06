import { MuscleModel } from "../../../models";
import Muscle from "../models/Muscle";

export default async function getMuscles(): Promise<Muscle[] | null> {
  return await MuscleModel.find();
}
