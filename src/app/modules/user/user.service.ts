import * as bcrypt from 'bcrypt';
import config from '../../../config';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  const { password } = payload;
  const bcryptPassword = await bcrypt.hash(password, config.bcrypt_salt_rounds);
  payload.password = bcryptPassword;
  const data = await User.create(payload);
  return data;
};

export const userService = { createUser };
