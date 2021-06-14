export interface CreateMightyWorkoutInput {
  userId: string;
  workoutId?: string;
}

export interface MightyWorkoutUpdate {
  key: string;
  val?: any;
}

export interface CreateWorkoutInput {
  name: string;
  description: string;
  workoutSets: string[];
  author: string;
}
