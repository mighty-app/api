import MightyAchievement from "../../achievements/models/MightyAchievement";
import Level from "../../levels/models/Level";
import { SafeMightyToken } from "../../tokens/entities/SafeMightyToken";
import { SafeUser } from "../models/SafeUser";
import followUser from "./followUser";
import get from "./get";
import getAchievements from "./getAchievements";
import getLevel from "./getLevel";
import getMightyTokens from './getMightyTokens';

interface UserService {
  getUser(userId: string): Promise<SafeUser | null>;
  getUserAchievements(userId: string): Promise<MightyAchievement[] | null>;
  getUserLevel(userId: string): Promise<Level | null>;
  getUserMightyTokens(userId: string): Promise<SafeMightyToken[] | null>
  followOtherUser(userId: string, otherUserId: string): Promise<SafeUser | null>
}

export default class RealUserService implements UserService {
  public async getUser(userId: string): Promise<SafeUser | null> {
    return await get(userId);
  }

  public async getUserAchievements(userId: string): Promise<MightyAchievement[] | null> {
    return await getAchievements(userId);
  }

  public async getUserLevel(userId: string): Promise<Level | null> {
    return await getLevel(userId);
  }

  public async getUserMightyTokens(userId: string): Promise<SafeMightyToken[] | null> {
    return await getMightyTokens(userId)
  }

  public async followOtherUser(userId: string, otherUserId: string): Promise<SafeUser | null> {
    return await followUser(userId, otherUserId)
  }
}
