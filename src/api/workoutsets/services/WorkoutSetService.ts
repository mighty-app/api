import WorkoutSet from "../models/WorkoutSet";
import create from './create';

interface WorkoutSetService {
    createWorkoutSet(reps: number, exercise: string): Promise<WorkoutSet>
}

export default class RealWorkoutSetService implements WorkoutSetService {
    public async createWorkoutSet(reps: number, exercise: string): Promise<WorkoutSet> {
        return await create(reps, exercise)
    }
}
