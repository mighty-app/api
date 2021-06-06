import { ExerciseModel } from "../../../models";
import Exercise from "../models/Exercise";

interface ExerciseMutation {
  createExercise(name: string, type: string, equipment: string, instructions: string, xp: number): Promise<Exercise>;
}

export default class RealExerciseMutation implements ExerciseMutation {
  public async createExercise(
    name: string,
    type: string,
    equipment: string,
    instructions: string,
    xp: number
  ): Promise<Exercise> {
    return await ExerciseModel.create({ name, type, equipment, instructions, xp });
  }
}
