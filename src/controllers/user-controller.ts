import { Request, Response, NextFunction } from "express";
import { ApiSuccess } from "@/utils/ApiSucess";
import { asyncHandler } from "@/middleware/async-middleware";
import { User } from "@/types/interfaces/interfaces.common";

// @desc     Gets all users from database
// @route    /users
// @method   GET

// ? asyncHandler should be used for every request for easy async handling
export const getUsers = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {

    // Example user, get from database
    const user = { name: "John Doe" };

    // Return json with success message
    res.status(200).json(new ApiSuccess<User>(user, "Success!"));
  },
);
