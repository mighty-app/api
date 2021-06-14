import Workout from "../models/Workout";
import create from "./create";
import get from "./get";

interface WorkoutService {
  getWorkout(workoutId: string): Promise<Workout | null>;
  createWorkout(name: string, description: string, workoutSets: string[]): Promise<Workout>;
}

export default class RealWorkoutService implements WorkoutService {
  public async getWorkout(workoutId: string): Promise<Workout | null> {
    return await get(workoutId);
  }

  public async createWorkout(name: string, description: string, workoutSets: string[]): Promise<Workout> {
    return await create(name, description, workoutSets);
  }
}
