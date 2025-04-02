import { Request, Response, NextFunction } from "express";

export function myMiddlewares(request: Request, response: Response, next: NextFunction) {



  return next()

}