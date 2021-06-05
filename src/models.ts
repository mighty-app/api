import { getModelForClass } from "@typegoose/typegoose";
import Exercise from "./api/exercises/models/Exercise";
import User from "./api/users/models/User";

export const ExerciseModel = getModelForClass(Exercise);
export const UserModel = getModelForClass(User);
