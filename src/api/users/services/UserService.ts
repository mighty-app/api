import RealAchievement from "../../achievements/models/RealAchievement";
import { SafeUser } from "../models/SafeUser";
import get from "./get";
import getAchievements from "./getAchievements";

interface UserService {
  getUser(userId: string): Promise<SafeUser | null>;
  getUserAchievements(userId: string): Promise<RealAchievement[] | null>;
}

export default class RealUserService implements UserService {
  public async getUser(userId: string): Promise<SafeUser | null> {
    return await get(userId);
  }

  public async getUserAchievements(userId: string): Promise<RealAchievement[] | null> {
    return await getAchievements(userId);
  }
}
