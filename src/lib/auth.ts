import { compare } from 'bcrypt';
import User, { IUser } from './(models)/User';
import { connectToDb } from './connectToDb';

type UserLoginDate = {
  email: string;
  password: string;
};

export const loginUser = async ({ email, password }: UserLoginDate): Promise<IUser | null> => {
  if (!email || !password) {
    throw new Error('Missing email or password');
  }
  await connectToDb()

  const user: IUser | null = await User.findOne({ email });

  if (!user) {
    throw new Error(`${email} does nost exist`);
  }

  if (user.password) {
    const isValid = await compare(password, user.password);

    if (!isValid) {
      throw new Error('Password is incorrect');
    }
  } else {
    throw new Error('Something is wrong');
  }

  return user;
};
