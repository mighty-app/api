import { SafeUser } from "../models/SafeUser";
import get from "./get";

interface UserService {
  getUser(userId: string): Promise<SafeUser | null>;
}

export default class RealUserService implements UserService {
  public async getUser(userId: string): Promise<SafeUser | null> {
    return await get(userId);
  }
}
