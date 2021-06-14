import { Body, Controller, Get, Path, Post, Route, Tags } from "@tsoa/runtime";
import { MightyError } from "../../../errors";
import { CreateMightyWorkoutInput, MightyWorkoutUpdate } from "../entities/inputs";
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

  /** Update Mighty workout */
  @Post("{mightyWorkoutId}")
  async updateMightyWorkout(
    @Path() mightyWorkoutId: string,
    @Body() update: MightyWorkoutUpdate
  ): Promise<MightyWorkout | MightyError | null> {
    return new RealMightyWorkoutService().updateMightyWorkout(mightyWorkoutId, update);
  }
}
