import { Controller, Get, Path, Route, Tags } from "tsoa";
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
}
