import Workout from "../models/Workout";
import get from "./get";

interface WorkoutService {
  getWorkout(workoutId: string): Promise<Workout | null>;
}

export default class RealWorkoutService implements WorkoutService {
  public async getWorkout(workoutId: string): Promise<Workout | null> {
    return await get(workoutId);
  }
}
