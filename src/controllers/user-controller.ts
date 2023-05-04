import { Request, Response, NextFunction } from "express";
import { ApiSuccess } from "@/utils/ApiSucess";
import { User } from "@/types/interfaces/interfaces.common";

// @desc     Gets all users from database
// @route    /users
// @method   GET

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(new ApiSuccess<User>({ name: "John Doe" }, "Success!"));
};
