import { NextFunction, Request, Response } from "express";
import { UnsuccessfulAuth } from "../entities/errors";
import { SuccessfulAuth } from "../entities/responses";
import logInWithEmail from "./logInWithEmail";
import signUpWithEmail from "./signUpWithEmail";
import validateToken from "./validateToken";

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

  validateToken(
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

  public async validateToken(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>> {
    return await validateToken(request, response, next);
  }
}
