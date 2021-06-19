import jwt from 'jsonwebtoken';
import { MightyTokenModel, UserModel } from '../../../models';
import { KEYS } from '../../../util/secrets';
import { TokenType } from '../entities/TokenType';

export default async function createMighty(name: string, type: TokenType, userId: string): Promise<string | null> {
  try {
    const user = await UserModel.findById(userId)
    if (!user) throw new Error()

    const created = new Date()

    const token = jwt.sign({userId, created}, KEYS!)
    const hashed = jwt.sign({token}, KEYS!)

    const mightyToken = await MightyTokenModel.create({name, type, token: hashed, user: userId, created})

    if (user.tokens) user.tokens.push(mightyToken.id)
    else user.tokens = [mightyToken.id]

    return token

  } catch (error) {
    throw error
  }
}
