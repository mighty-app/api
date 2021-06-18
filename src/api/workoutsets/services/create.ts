import { WorkoutSetModel } from "src/models";
import WorkoutSet from "../models/WorkoutSet";

export default async function createMighty(reps: number, exercise: string): Promise<WorkoutSet> {
    try {
        return await WorkoutSetModel.create({reps, exercise})
    } catch (error) {
        throw error
    }
}
