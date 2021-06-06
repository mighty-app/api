import { Controller, Get, Path, Route, Tags } from "tsoa";
import Level from "../models/Level";
import RealLevelService from "../services/LevelService";

@Route("levels")
@Tags("Level")
export class LevelController extends Controller {
  /** Get level by ID */
  @Get("{levelId}")
  async getLevel(@Path() levelId: string): Promise<Level | null> {
    return new RealLevelService().getLevel(levelId);
  }
}
