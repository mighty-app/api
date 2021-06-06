import User from "../api/users/models/User";

export interface SuccessfulLogIn {
  user: User;
  token: string;
}

export class SuccessfulLogIn {
  constructor(user: User, token: string) {
    this.user = user;
    this.token = token;
  }
}
