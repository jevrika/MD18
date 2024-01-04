import NextAuth from 'next-auth/next';
import { IUser } from '../../lib/(models)/User';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: IUser & DefaultSession['user'];
  }

  interface User {
    id?: string;
    username: string;
    email: string;
    password: string;
    createdAt?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: IUser & DefaultSession['user'];
  }
}
