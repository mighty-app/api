import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../../models";
import { KEYS } from "../../../util/secrets";
import { IncorrectEmail, IncorrectPassword, UnsuccessfulAuth, UnsuccessfulLogInReason } from "../entities/errors";
import { SuccessfulAuth, SuccessfulLogIn } from "../entities/responses";

interface LogInWithEmailInput {
  email: string;
  password: string;
}

export default async function logInWithEmail(
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>> {
  try {
    const { email, password }: LogInWithEmailInput = request.body;

    const user = await UserModel.findOne({ email });

    if (!user) throw UnsuccessfulLogInReason.IncorrectEmail;

    const isMatch = await user.comparePassword(password);

    if (!isMatch) throw UnsuccessfulLogInReason.IncorrectPassword;

    const token = jwt.sign({ userId: user.id }, KEYS!);

    user.isLoggedIn = true;
    await user.save();

    return response.json(new SuccessfulLogIn(user.toSafeUser(), token));
  } catch (error) {
    switch (error) {
      case UnsuccessfulLogInReason.IncorrectEmail:
        return response.json(new IncorrectEmail());

      case UnsuccessfulLogInReason.IncorrectPassword:
        return response.json(new IncorrectPassword());

      default:
        throw error;
    }
  }
}
