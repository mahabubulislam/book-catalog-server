import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwt.helper';
import { IRegistrationResponses, IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IRegistrationResponses> => {
  const data = await User.create(payload);
  const accessToken = jwtHelpers.createToken(
    { name: data.name, email: data.email },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  const userData = { name: data.name, email: data.email };
  const refreshToken = jwtHelpers.createToken(
    userData,
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );
  return { ...userData, refreshToken, accessToken };
};

export const userService = { createUser };
