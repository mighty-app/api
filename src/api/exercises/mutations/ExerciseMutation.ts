import { ExerciseModel } from "../../../models";
import Equipment from "../models/Equipment";
import Exercise from "../models/Exercise";
import ExerciseType from "../models/ExerciseType";

interface ExerciseMutation {
  createExercise(
    name: string,
    type: ExerciseType,
    equipment: Equipment,
    instructions: string,
    xp: number
  ): Promise<Exercise>;
}

export default class RealExerciseMutation implements ExerciseMutation {
  public async createExercise(
    name: string,
    type: ExerciseType,
    equipment: Equipment,
    instructions: string,
    xp: number
  ): Promise<Exercise> {
    return await ExerciseModel.create({ name, type, equipment, instructions, xp });
  }
}
