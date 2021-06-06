import { Controller, Get, Path, Route, Tags } from "tsoa";
import Exercise from "../../exercises/models/Exercise";
import Muscle from "../models/Muscle";
import RealMuscleService from "../services/MuscleService";

@Route("muscles")
@Tags("Muscle")
export class MuscleController extends Controller {
  /** Get muscle by ID */
  @Get("{muscleId}")
  async getMuscle(@Path() muscleId: string): Promise<Muscle | null> {
    return new RealMuscleService().getMuscle(muscleId);
  }

  /** Get all muscles */
  @Get()
  async getMuscles(): Promise<Muscle[] | null> {
    return new RealMuscleService().getMuscles();
  }

  /** Get all exercises by muscle ID */
  @Get("{muscleId}/exercises")
  async getExercises(@Path() muscleId: string): Promise<Exercise[] | null> {
    return new RealMuscleService().getExercisesByMuscle(muscleId);
  }
}
