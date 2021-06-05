import User from "../models/User";
import get from "./get";

export default class UserService {
  public async getUser(userId: string): Promise<User | null> {
    return await get(userId);
  }
}
