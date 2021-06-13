import MightyWorkoutSet from "../models/MightyWorkoutSet";
import createMighty from "./createMighty";

interface MightyWorkoutSetService {
  createMightyWorkoutSet(reps: number, pounds: number, workoutId: string): Promise<MightyWorkoutSet>;
}

export default class RealMightyWorkoutSetService implements MightyWorkoutSetService {
  public async createMightyWorkoutSet(reps: number, pounds: number, workoutId: string): Promise<MightyWorkoutSet> {
    return await createMighty(reps, pounds, workoutId);
  }
}
