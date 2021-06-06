import { NextFunction, Request, Response } from "express";
import { UnsuccessfulLogIn } from "../../../entities/errors";
import { SuccessfulLogIn } from "../../../entities/responses";
import logInWithEmail from "./logInWithEmail";

interface AuthService {
  logInWithEmail(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<SuccessfulLogIn | UnsuccessfulLogIn>>;
}

export default class RealAuthService implements AuthService {
  public async logInWithEmail(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<SuccessfulLogIn | UnsuccessfulLogIn>> {
    return await logInWithEmail(request, response, next);
  }
}
