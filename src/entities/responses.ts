import { SafeUser } from "../api/users/models/SafeUser";

export interface SuccessfulLogIn {
  user: SafeUser;
  token: string;
}

export class RealSuccessfulLogIn implements SuccessfulLogIn {
  readonly user: SafeUser;
  readonly token: string;

  constructor(user: SafeUser, token: string) {
    this.user = user;
    this.token = token;
  }
}
