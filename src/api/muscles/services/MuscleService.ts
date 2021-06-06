import Exercise from "../../exercises/models/Exercise";
import Muscle from "../models/Muscle";
import get from "./get";
import getAll from "./getAll";
import getExercises from "./getExercises";

interface MuscleService {
  getMuscle(muscleId: string): Promise<Muscle | null>;
  getMuscles(): Promise<Muscle[] | null>;
  getMuscleExercises(muscleId: string): Promise<Exercise[] | null>;
}

export default class RealMuscleService implements MuscleService {
  public async getMuscle(muscleId: string): Promise<Muscle | null> {
    return await get(muscleId);
  }

  public async getMuscles(): Promise<Muscle[] | null> {
    return await getAll();
  }

  public async getMuscleExercises(muscleId: string): Promise<Exercise[] | null> {
    return await getExercises(muscleId);
  }
}
