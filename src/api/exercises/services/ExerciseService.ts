import Exercise from "../models/Exercise";
import get from "./get";
import getAll from "./getAll";

interface ExerciseService {
  getExercise(exerciseId: string): Promise<Exercise | null>;
  getExercises(): Promise<Exercise[] | null>;
}

export default class RealExerciseService implements ExerciseService {
  public async getExercise(exerciseId: string): Promise<Exercise | null> {
    return await get(exerciseId);
  }

  public async getExercises(): Promise<Exercise[] | null> {
    return await getAll();
  }
}
