import * as bcrypt from 'bcrypt';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwt.helper';
import { IRegistrationResponses, IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (
  payload: IUser
): Promise<IUser & IRegistrationResponses> => {
  const { password } = payload;
  const bcryptPassword = await bcrypt.hash(password, config.bcrypt_salt_rounds);
  payload.password = bcryptPassword;
  const data = await User.create(payload);
  const accessToken = jwtHelpers.createToken(
    { name: data.name, email: data.email },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { name: data.name, email: data.email },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );
  return { ...data, refreshToken, accessToken };
};

export const userService = { createUser };
