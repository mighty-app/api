import { ProgramModel } from "../../../models";
import Program from "../models/Program";

export default async function create(name: string): Promise<Program | null> {
  try {
    return await ProgramModel.create({name})
  } catch (error) {
    throw error
  }
}
