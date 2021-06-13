import { Body, Controller, Get, Path, Post, Route, Tags } from "@tsoa/runtime";
import { CreateMightyWorkoutInput } from "../entities/inputs";
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

  /** Create Mighty workout */
  @Post()
  async createMightyWorkout(@Body() { userId, workoutId }: CreateMightyWorkoutInput): Promise<MightyWorkout> {
    return new RealMightyWorkoutService().createMightyWorkout(userId, workoutId);
  }
}
