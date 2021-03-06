import { getModelForClass } from "@typegoose/typegoose";
import Achievement from "./api/achievements/models/Achievement";
import MightyAchievement from "./api/achievements/models/MightyAchievement";
import Exercise from "./api/exercises/models/Exercise";
import Level from "./api/levels/models/Level";
import Muscle from "./api/muscles/models/Muscle";
import Program from "./api/programs/models/Program";
import MightyToken from "./api/tokens/models/MightyToken";
import User from "./api/users/models/User";
import MightyWorkout from "./api/workouts/models/MightyWorkout";
import Workout from "./api/workouts/models/Workout";
import MightyWorkoutSet from "./api/workoutsets/models/MightyWorkoutSet";
import WorkoutSet from "./api/workoutsets/models/WorkoutSet";

export const AchievementModel = getModelForClass(Achievement);
export const ExerciseModel = getModelForClass(Exercise);
export const LevelModel = getModelForClass(Level);
export const MightyWorkoutModel = getModelForClass(MightyWorkout);
export const MightyWorkoutSetModel = getModelForClass(MightyWorkoutSet);
export const MuscleModel = getModelForClass(Muscle);
export const MightyAchievementModel = getModelForClass(MightyAchievement);
export const MightyTokenModel = getModelForClass(MightyToken)
export const ProgramModel = getModelForClass(Program)
export const WorkoutModel = getModelForClass(Workout);
export const WorkoutSetModel = getModelForClass(WorkoutSet);
export const UserModel = getModelForClass(User);
