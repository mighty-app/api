import { InvalidUpdateKey, MightyError, MightyWorkoutNotFound } from "../../../errors";
import { MightyWorkoutModel } from "../../../models";
import { MightyWorkoutUpdate } from "../entities/inputs";
import MightyWorkout from "../models/MightyWorkout";

export default async function updateMighty(
  mightyWorkoutId: string,
  update: MightyWorkoutUpdate
): Promise<MightyWorkout | MightyError | null> {
  try {
    const mightyWorkout = MightyWorkoutModel.findById(mightyWorkoutId);
    if (!mightyWorkout) throw new MightyWorkoutNotFound();

    switch (update.key) {
      case "end":
        mightyWorkout.end = new Date();
        break;

      default:
        throw new InvalidUpdateKey();
    }

    await mightyWorkout.save();

    return mightyWorkout;
  } catch (error) {
    throw error;
  }
}
