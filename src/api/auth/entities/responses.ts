import { SafeUser } from "../../users/models/SafeUser";

export interface SuccessfulAuth {
  user: SafeUser;
  token: string;
}

export class SuccessfulLogIn implements SuccessfulAuth {
  readonly user: SafeUser;
  readonly token: string;

  constructor(user: SafeUser, token: string) {
    this.user = user;
    this.token = token;
  }
}

export class SuccessfulSignUp implements SuccessfulAuth {
  readonly user: SafeUser;
  readonly token: string;

  constructor(user: SafeUser, token: string) {
    this.user = user;
    this.token = token;
  }
}

export class SuccessfulTokenValidation implements SuccessfulAuth {
  readonly user: SafeUser;
  readonly token: string;

  constructor(user: SafeUser, token: string) {
    this.user = user;
    this.token = token;
  }
}
