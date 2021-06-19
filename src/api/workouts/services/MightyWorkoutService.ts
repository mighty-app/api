import { MightyError } from "../../../errors";
import { MightyWorkoutUpdate } from "../entities/inputs";
import { MightyWorkoutSummary } from "../entities/MightyWorkoutSummary";
import MightyWorkout from "../models/MightyWorkout";
import createMighty from "./createMighty";
import getMighty from "./getMighty";
import getMightySummary from "./getMightySummary";
import updateMighty from "./updateMighty";

interface MightyWorkoutService {
  getMightyWorkout(mightyWorkoutId: string): Promise<MightyWorkout | null>;
  createMightyWorkout(userId: string, workoutId?: string): Promise<MightyWorkout>;
  updateMightyWorkout(
    mightyWorkoutId: string,
    update: MightyWorkoutUpdate
  ): Promise<MightyWorkout | MightyError | null>;
  getMightyWorkoutSummary(mightyWorkoutId: string): Promise<MightyWorkoutSummary | null>
}

export default class RealMightyWorkoutService implements MightyWorkoutService {
  public async getMightyWorkout(mightyWorkoutId: string): Promise<MightyWorkout | null> {
    return await getMighty(mightyWorkoutId);
  }

  public async createMightyWorkout(userId: string, workoutId?: string): Promise<MightyWorkout> {
    return await createMighty(userId, workoutId);
  }

  public async updateMightyWorkout(
    mightyWorkoutId: string,
    update: MightyWorkoutUpdate
  ): Promise<MightyWorkout | MightyError | null> {
    return await updateMighty(mightyWorkoutId, update);
  }

  public async getMightyWorkoutSummary(mightyWorkoutId: string): Promise<MightyWorkoutSummary | null> {
    return await getMightySummary(mightyWorkoutId)
  }
}
