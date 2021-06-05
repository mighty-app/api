import User from "../models/User";
import { UserModel } from "../../../models";

export default async function getUser(userId: string): Promise<User | null> {
  return await UserModel.findById(userId);
}
