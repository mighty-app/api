import { ProgramModel, UserModel } from "../../../models";
import { SafeUser } from "../models/SafeUser";
import User from "../models/User";

export default async function followProgram(userId: string, programId: string): Promise<SafeUser | null> {
  try {
    const user = await UserModel.findById(userId)
    const program = await ProgramModel.findById(programId)

    if (!user || !program) throw new Error()

    const prevProgramId = user.programFollowing
    if (prevProgramId) {
      const prevProgram = await ProgramModel.findById(prevProgramId)
      if (prevProgram) {
        prevProgram.users = (prevProgram.users as User[]).filter((user: User) => user.id !== userId)
      }
    }

    user.programFollowing = programId
    await user.save()

    if (program.users) program.users.push(userId)
    else program.users = [userId]

    return user.toSafeUser()
  } catch(error) {
    throw error
  }
}
