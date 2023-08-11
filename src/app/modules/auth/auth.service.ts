import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwt.helper';
import ApiError from '../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginResponse, ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser): Promise<ILoginResponse> => {
  const { email, password } = payload;

  const isUserExist = await User.findOne({ email }).select({ password: 1 });
  if (!isUserExist) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  console.log(isUserExist);
  const isPasswordMatched = await User.isPasswordMatched(
    password,
    isUserExist.password
  );
  if (!isPasswordMatched)
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password did not matched');
  const token = jwtHelpers.createToken(
    { email, name: isUserExist.name },
    config.jwt.secret as Secret,
    '24h'
  );
  return { token, email: isUserExist.email, name: isUserExist.name };
};
export const authService = { loginUser };
