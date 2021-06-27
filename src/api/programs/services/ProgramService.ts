import Program from "../models/Program";
import create from './create';

interface ProgramService {
  createProgram(name: string): Promise<Program | null>
}

export default class RealProgramService implements ProgramService {
  public async createProgram(name: string): Promise<Program | null> {
    return await create(name)
  }
}
