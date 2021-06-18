import { Body, Controller, Post, Route, Tags } from "tsoa";
import { CreateWorkoutSetInput } from "../entities/inputs";
import WorkoutSet from "../models/WorkoutSet";
import RealWorkoutSetService from "../services/WorkoutSetService";

@Route("workout-sets")
@Tags("Workout Sets")
export class WorkoutSetController extends Controller {
  /** Create workout set */
  @Post()
  async createWorkoutSet(
    @Body() { reps, exercise}: CreateWorkoutSetInput
  ): Promise<WorkoutSet> {
    return new RealWorkoutSetService().createWorkoutSet(reps, exercise)
  }
}
