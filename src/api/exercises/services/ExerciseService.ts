import Exercise from "../models/Exercise";
import get from "./get";

interface ExerciseService {
  getExercise(exerciseId: string): Promise<Exercise | null>;
}

export default class RealExerciseService implements ExerciseService {
  public async getExercise(exerciseId: string): Promise<Exercise | null> {
    return await get(exerciseId);
  }
}
