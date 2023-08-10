import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { userService } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;

  const result = await userService.createUser(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created Successfully',
    data: result
  });
});

export const userController = { createUser };
