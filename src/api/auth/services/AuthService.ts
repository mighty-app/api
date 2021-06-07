import { NextFunction, Request, Response } from "express";
import { UnsuccessfulAuth } from "../entities/errors";
import { SuccessfulAuth } from "../entities/responses";
import logInWithEmail from "./logInWithEmail";
import signUpWithEmail from "./signUpWithEmail";

interface AuthService {
  logInWithEmail(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>>;

  signUpWithEmail(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>>;
}

export default class RealAuthService implements AuthService {
  public async logInWithEmail(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>> {
    return await logInWithEmail(request, response, next);
  }

  public async signUpWithEmail(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>> {
    return await signUpWithEmail(request, response, next);
  }
}
