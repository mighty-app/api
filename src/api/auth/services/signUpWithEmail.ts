import { DocumentType } from "@typegoose/typegoose";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../../models";
import { KEYS } from "../../../util/secrets";
import User from "../../users/models/User";
import {
  EmailInUse,
  EmailInUseAndUsernameTaken,
  UnsuccessfulAuth,
  UnsuccessfulSignUpReason,
  UsernameTaken
} from "../entities/errors";
import { SuccessfulAuth, SuccessfulSignUp } from "../entities/responses";

interface SignUpWithEmailInput {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export default async function signUpWithEmail(
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>> {
  try {
    const { firstName, lastName, email, username, password }: SignUpWithEmailInput = request.body;

    const emailInUse = await UserModel.findOne({ email }).then((user: DocumentType<User> | null) => !!user);
    const usernameTaken = await UserModel.findOne({ username }).then((user: DocumentType<User> | null) => !!user);

    if (emailInUse && usernameTaken) throw UnsuccessfulSignUpReason.EmailInUseAndUsernameTaken;
    if (emailInUse) throw UnsuccessfulSignUpReason.EmailInUse;
    if (usernameTaken) throw UnsuccessfulSignUpReason.UsernameTaken;

    const user = await UserModel.create({ firstName, lastName, email, username, password, isLoggedIn: true });
    const token = jwt.sign({ userId: user.id }, KEYS!);

    return response.json(new SuccessfulSignUp(user.toSafeUser(), token));
  } catch (error) {
    switch (error) {
      case UnsuccessfulSignUpReason.EmailInUseAndUsernameTaken:
        return response.json(new EmailInUseAndUsernameTaken());

      case UnsuccessfulSignUpReason.EmailInUse:
        return response.json(new EmailInUse());

      case UnsuccessfulSignUpReason.UsernameTaken:
        return response.json(new UsernameTaken());

      default:
        throw error;
    }
  }
}
