import MightyWorkout from "../models/MightyWorkout";
import createMighty from "./createMighty";
import getMighty from "./getMighty";

interface MightyWorkoutService {
  getMightyWorkout(mightyWorkoutId: string): Promise<MightyWorkout | null>;
  createMightyWorkout(userId: string, workoutId?: string): Promise<MightyWorkout>;
}

export default class RealMightyWorkoutService implements MightyWorkoutService {
  public async getMightyWorkout(mightyWorkoutId: string): Promise<MightyWorkout | null> {
    return await getMighty(mightyWorkoutId);
  }

  public async createMightyWorkout(userId: string, workoutId?: string): Promise<MightyWorkout> {
    return await createMighty(userId, workoutId);
  }
}
