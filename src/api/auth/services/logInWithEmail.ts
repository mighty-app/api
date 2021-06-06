import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {
  IncorrectEmail,
  IncorrectPassword,
  UnsuccessfulLogIn,
  UnsuccessfulLogInReason
} from "../../../entities/errors";
import { RealSuccessfulLogIn, SuccessfulLogIn } from "../../../entities/responses";
import { UserModel } from "../../../models";
import { KEYS } from "../../../util/secrets";

interface LogInWithEmailInput {
  email: string;
  password: string;
}

export default async function logInWithEmail(
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response<SuccessfulLogIn | UnsuccessfulLogIn>> {
  try {
    const { email, password }: LogInWithEmailInput = request.body;

    const user = await UserModel.findOne({ email });

    if (!user) throw UnsuccessfulLogInReason.IncorrectEmail;

    const isMatch = await user.comparePassword(password);

    if (!isMatch) throw UnsuccessfulLogInReason.IncorrectPassword;

    const token = jwt.sign({ userId: user.id }, KEYS!);
    return response.json(new RealSuccessfulLogIn(user.toSafeUser(), token));
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
