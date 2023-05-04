import { Request, Response, NextFunction, RequestHandler } from "express";
import { ApiError } from "@/types/interfaces/interfaces.common";
import { errorResponse } from "./error-middleware";

// @desc Handles async by resolving, and providing error handling to every request

export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
       Promise.resolve(fn(req, res, next)).catch((error: ApiError) => {
          errorResponse(error, req, res, next)
       });
    };
 };