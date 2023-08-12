import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { authService } from './auth.service';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const { token, ...user } = await authService.loginUser(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: { token, user },
    message: 'User Logged In Successfully'
  });
});
export const authController = { loginUser };
