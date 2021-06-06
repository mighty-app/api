import Muscle from "../models/Muscle";
import get from "./get";
import getAll from "./getAll";

interface MuscleService {
  getMuscle(muscleId: string): Promise<Muscle | null>;
  getMuscles(): Promise<Muscle[] | null>;
}

export default class RealMuscleService implements MuscleService {
  public async getMuscle(muscleId: string): Promise<Muscle | null> {
    return await get(muscleId);
  }

  public async getMuscles(): Promise<Muscle[] | null> {
    return await getAll();
  }
}
