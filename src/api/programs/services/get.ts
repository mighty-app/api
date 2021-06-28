import { ProgramModel } from "../../../models";
import Program from "../models/Program";

export default async function getProgram(programId: string): Promise<Program | null>{
  return await ProgramModel.findById(programId)
}
