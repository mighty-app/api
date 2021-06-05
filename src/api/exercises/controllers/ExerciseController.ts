import { Controller, Get, Path, Route, Tags } from "tsoa";
import Exercise from "../models/Exercise";
import RealExerciseService from "../services/ExerciseService";

@Route("exercises")
@Tags("Exercise")
export class ExerciseController extends Controller {
  /** Get exercise by ID */
  @Get("{exerciseId}")
  async getExercise(@Path() exerciseId: string): Promise<Exercise | null> {
    return new RealExerciseService().getExercise(exerciseId);
  }
}
