import { getModelForClass } from "@typegoose/typegoose";
import Exercise from "./api/exercises/models/Exercise";
import Level from "./api/levels/models/Level";
import Muscle from "./api/muscles/models/Muscle";
import User from "./api/users/models/User";

export const ExerciseModel = getModelForClass(Exercise);
export const LevelModel = getModelForClass(Level);
export const MuscleModel = getModelForClass(Muscle);
export const UserModel = getModelForClass(User);
