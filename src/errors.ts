export interface MightyError {
  message: string;
  error?: any;
}

export class MightyWorkoutNotFound implements MightyError {
  readonly message = "Mighty workout not found";
  readonly error?: any;

  constructor(error?: any) {
    this.error = error;
  }
}

export class InvalidUpdateKey implements MightyError {
  readonly message = "Invalid update key";
  readonly error?: any;

  constructor(error?: any) {
    this.error = error;
  }
}
