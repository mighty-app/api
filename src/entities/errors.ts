export enum UnsuccessfulLogInReason {
  IncorrectPassword = "INCORRECT PASSWORD",
  IncorrectEmail = "INCORRECT EMAIL"
}

export interface UnsuccessfulLogIn {
  param: string;
  message: string;
}

export class IncorrectPassword implements UnsuccessfulLogIn {
  param = "password";
  message = "Password is incorrect.";
}

export class IncorrectEmail implements UnsuccessfulLogIn {
  param = "email";
  message = "No accounts found with that email.";
}
