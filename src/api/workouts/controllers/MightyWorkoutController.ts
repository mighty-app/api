import { Controller, Get, Path, Route, Tags } from "@tsoa/runtime";
import MightyWorkout from "../models/MightyWorkout";
import RealMightyWorkoutService from "../services/MightyWorkoutService";

@Route("mighty-workouts")
@Tags("Mighty Workout")
export class MightyWorkoutController extends Controller {
  /** Get Mighty workout by ID */
  @Get("{mightyWorkoutId}")
  async getMightyWorkout(@Path() mightyWorkoutId: string): Promise<MightyWorkout | null> {
    return new RealMightyWorkoutService().getMightyWorkout(mightyWorkoutId);
  }
}
