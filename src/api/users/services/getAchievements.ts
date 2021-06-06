import { DocumentType } from "@typegoose/typegoose";
import { UserModel } from "../../../models";
import RealAchievement from "../../achievements/models/RealAchievement";
import User from "../models/User";

export default async function getUserAchievements(userId: string): Promise<RealAchievement[] | null> {
  return await UserModel.findById(userId)
    .populate("achievements")
    .exec()
    .then((user: DocumentType<User> | null) => user?.achievements ?? null);
}
