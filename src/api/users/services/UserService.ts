import RealAchievement from "../../achievements/models/RealAchievement";
import Level from "../../levels/models/Level";
import { SafeUser } from "../models/SafeUser";
import get from "./get";
import getAchievements from "./getAchievements";
import getLevel from "./getLevel";

interface UserService {
  getUser(userId: string): Promise<SafeUser | null>;
  getUserAchievements(userId: string): Promise<RealAchievement[] | null>;
  getUserLevel(userId: string): Promise<Level | null>;
}

export default class RealUserService implements UserService {
  public async getUser(userId: string): Promise<SafeUser | null> {
    return await get(userId);
  }

  public async getUserAchievements(userId: string): Promise<RealAchievement[] | null> {
    return await getAchievements(userId);
  }

  public async getUserLevel(userId: string): Promise<Level | null> {
    console.log("USER SERVICE, USER ID: ", userId);
    return await getLevel(userId);
  }
}
