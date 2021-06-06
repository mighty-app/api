import { LevelModel } from "../../../models";
import Level from "../models/Level";

export default async function getLevel(levelId: string): Promise<Level | null> {
  return await LevelModel.findById(levelId);
}
