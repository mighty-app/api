import { UserModel, WorkoutModel } from "../../../models";
import Workout from "../models/Workout";

export default async function create(
  name: string,
  description: string,
  workoutSets: string[],
  author: string
): Promise<Workout> {
  try {
    const workout = await WorkoutModel.create({ name, description, workoutSets, author });

    const user = await UserModel.findById(author);

    if (!user) throw new Error();

    if (user.workoutsAuthored) user.workoutsAuthored.push(workout.id);
    else user.workoutsAuthored = [workout.id];

    return workout;
  } catch (error) {
    throw error;
  }
}
