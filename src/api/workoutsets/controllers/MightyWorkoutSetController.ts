import { Body, Controller, Post, Route, Tags } from "@tsoa/runtime";
import { CreateMightyWorkoutSetInput } from "../entities/inputs";
import MightyWorkoutSet from "../models/MightyWorkoutSet";
import RealMightyWorkoutSetService from "../services/MightyWorkoutSetService";

@Route("mighty-workout-sets")
@Tags("Mighty Workout Sets")
export class MightyWorkoutSetController extends Controller {
  /** Create Mighty workout set */
  @Post()
  async createMightyWorkoutSet(
    @Body() { reps, pounds, workoutId }: CreateMightyWorkoutSetInput
  ): Promise<MightyWorkoutSet> {
    return new RealMightyWorkoutSetService().createMightyWorkoutSet(reps, pounds, workoutId);
  }
}
