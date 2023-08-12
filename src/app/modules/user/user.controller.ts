import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { userService } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;

  const { accessToken, refreshToken, ...user } = await userService.createUser(
    payload
  );
  const cookieOptions = {
    secure: config.env === 'production'
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created Successfully',
    data: { accessToken, user }
  });
});

export const userController = { createUser };
