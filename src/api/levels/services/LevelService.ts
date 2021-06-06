import Level from "../models/Level";
import get from "./get";

interface LevelService {
  getLevel(levelId: string): Promise<Level | null>;
}

export default class RealLevelService implements LevelService {
  public async getLevel(levelId: string): Promise<Level | null> {
    return await get(levelId);
  }
}
