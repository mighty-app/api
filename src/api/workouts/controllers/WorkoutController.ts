import { Body, Post, Route, Tags } from "@tsoa/runtime";
import { Controller } from "tsoa";
import { CreateWorkoutInput } from "../entities/inputs";
import Workout from "../models/Workout";
import RealWorkoutService from "../services/WorkoutService";

@Route("workouts")
@Tags("Workout")
export class WorkoutController extends Controller {
  /** Create workout */
  @Post()
  async createWorkout(@Body() { name, description, workoutSets }: CreateWorkoutInput): Promise<Workout> {
    return new RealWorkoutService().createWorkout(name, description, workoutSets);
  }
}
