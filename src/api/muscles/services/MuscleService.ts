import Muscle from "../models/Muscle";
import get from "./get";

interface MuscleService {
  getMuscle(muscleId: string): Promise<Muscle | null>;
}

export default class RealMuscleService implements MuscleService {
  public async getMuscle(muscleId: string): Promise<Muscle | null> {
    return await get(muscleId);
  }
}
