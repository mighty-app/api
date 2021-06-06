import { DocumentType } from "@typegoose/typegoose";
import { UserModel } from "../../../models";
import Level from "../../levels/models/Level";
import User from "../models/User";

export default async function getUserLevel(userId: string): Promise<Level | null> {
  return await UserModel.findById(userId)
    .populate("level")
    .exec()
    .then((user: DocumentType<User> | null) => user?.level ?? null);
}
