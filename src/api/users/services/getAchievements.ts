import { DocumentType } from "@typegoose/typegoose";
import { UserModel } from "../../../models";
import MightyAchievement from "../../achievements/models/MightyAchievement";
import User from "../models/User";

export default async function getUserAchievements(userId: string): Promise<MightyAchievement[] | null> {
  return await UserModel.findById(userId)
    .populate("achievements")
    .exec()
    .then((user: DocumentType<User> | null) => user?.achievements ?? null);
}
