import { UserModel } from "../../../models";
import User from "../models/User";

export default async function getUser(userId: string): Promise<User | null> {
  return await UserModel.findById(userId);
}
