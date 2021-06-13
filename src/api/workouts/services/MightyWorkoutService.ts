import MightyWorkout from "../models/MightyWorkout";
import getMighty from "./getMighty";

interface MightyWorkoutService {
  getMightyWorkout(mightyWorkoutId: string): Promise<MightyWorkout | null>;
}

export default class RealMightyWorkoutService implements MightyWorkoutService {
  public async getMightyWorkout(mightyWorkoutId: string): Promise<MightyWorkout | null> {
    return await getMighty(mightyWorkoutId);
  }
}
