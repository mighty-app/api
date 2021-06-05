import User from "../models/User";
import get from "./get";

interface UserService {
  getUser(userId: string): Promise<User | null>;
}

export default class RealUserService implements UserService {
  public async getUser(userId: string): Promise<User | null> {
    return await get(userId);
  }
}
