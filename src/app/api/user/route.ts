import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { hash } from 'bcrypt';
import User from '../../../lib/(models)/User';
import { connectToDb } from '@/src/lib/connectToDb';

export async function GET(request: { json: () => any }) {
  await connectToDb();

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'You are not authorized to view this page' });
  }
  return NextResponse.json({ message: `User Created` }, { status: 201 });
}

export async function POST() {
  try {
    await connectToDb();

    const passwordHash = await hash('password', 10);

    const adminUser = await User.create({
      username: 'admin',
      password: passwordHash,
      email: 'admin@test.com',
    });
    return NextResponse.json({ message: 'User creates successfully', adminUser });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
