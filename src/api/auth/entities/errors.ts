export enum UnsuccessfulLogInReason {
  IncorrectPassword = "INCORRECT PASSWORD",
  IncorrectEmail = "INCORRECT EMAIL"
}

export enum UnsuccessfulSignUpReason {
  EmailInUseAndUsernameTaken = "EMAIL IN USE AND USERNAME IS TAKEN",
  EmailInUse = "EMAIL IN USE",
  UsernameTaken = "USERNAME IS TAKEN"
}

export interface UnsuccessfulAuth {
  params: string[];
  message: string;
}

export class IncorrectPassword implements UnsuccessfulAuth {
  params = ["password"];
  message = "Password is incorrect.";
}

export class IncorrectEmail implements UnsuccessfulAuth {
  params = ["email"];
  message = "No accounts found with that email.";
}

export class EmailInUseAndUsernameTaken implements UnsuccessfulAuth {
  params = ["email", "password"];
  message = "Email is already in use and username is taken.";
}

export class EmailInUse implements UnsuccessfulAuth {
  params = ["email"];
  message = "Email is already in use.";
}

export class UsernameTaken implements UnsuccessfulAuth {
  params = ["username"];
  message = "Username is taken.";
}
