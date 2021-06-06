import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../api/users/models/User";
import { UserModel } from "../models";
import { KEYS } from "../util/secrets";

declare module "express-serve-static-core" {
  interface Request {
    "Requested-By": string;
    token?: string;
    user?: User;
  }
}

interface Token {
  userId: string;
}

export default async function MightyToken(request: Request, response: Response, next: NextFunction) {
  const isInternal = request.headers["Requested-By"] ? true : false;

  console.log("ORIGINAL REQUEST: ", request);

  if (isInternal) verifyInternalRequest(request, response, next);
  else verifyExternalRequest(request, response, next);
}

async function verifyInternalRequest(request: Request, response: Response, next: NextFunction) {
  try {
    const userId = (request.headers["Requested-By"] as string).split(" ")[1];

    const bearerToken = request.headers.authorization?.split(" ")[1];

    if (!bearerToken) throw Error;

    const decoded = jwt.verify(bearerToken, KEYS!) as Token;

    const user = await UserModel.findById(decoded.userId);

    const isVerified = user?.id === userId;

    if (!isVerified) throw Error;

    request.token = bearerToken;
    request.user = user ?? undefined;

    next();
  } catch (error) {
    response.sendStatus(403);
  }
}

async function verifyExternalRequest(request: Request, response: Response, next: NextFunction) {
  try {
    const hasBearerHeader = request.headers.authorization ? true : false;

    console.log("EXTERNAL REQUEST: ", request);

    if (!hasBearerHeader) throw Error;

    const bearerToken = request.headers.authorization?.split(" ")[1];

    if (!bearerToken) throw Error;

    const decoded = jwt.verify(bearerToken, KEYS!) as Token;

    const user = await UserModel.findById(decoded.userId);

    if (!user) throw Error;

    request.token = bearerToken;
    request.user = user;

    next();
  } catch (error) {
    response.sendStatus(403);
  }
}
