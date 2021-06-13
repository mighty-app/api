interface DbError {
  message: string;
}

export class MightyWorkoutNotFound implements DbError {
  message = "Mighty workout not found.";
}
