import { UserModel } from "../../../models";
import { SafeUser } from "../models/SafeUser";

export default async function getUser(userId: string): Promise<SafeUser | null> {
  return await UserModel.findById(userId).toSafeUser();
}
