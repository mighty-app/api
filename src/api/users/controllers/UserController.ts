import { Controller, Get, Path, Route, Tags } from "tsoa";
import MightyAchievement from "../../achievements/models/MightyAchievement";
import Level from "../../levels/models/Level";
import { SafeUser } from "../models/SafeUser";
import RealUserService from "../services/UserService";

@Route("users")
@Tags("User")
export class UserController extends Controller {
  /** Get user by ID */
  @Get("{userId}")
  async getUser(@Path() userId: string): Promise<SafeUser | null> {
    return await new RealUserService().getUser(userId);
  }

  /** Get all achievements by user ID */
  @Get("{userId}/achievements")
  async getUserAchievements(@Path() userId: string): Promise<MightyAchievement[] | null> {
    return await new RealUserService().getUserAchievements(userId);
  }

  /** Get level by user ID */
  @Get("{userId}/level")
  async getUserLevel(@Path() userId: string): Promise<Level | null> {
    return await new RealUserService().getUserLevel(userId);
  }
}
