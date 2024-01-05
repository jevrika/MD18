import { NextResponse } from 'next/server';
import Blog, { IBlog } from '../../../lib/(models)/Blog';
import { connectToDb } from '@/src/lib/connectToDb';

export async function GET() {

  try {
    await connectToDb();

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return NextResponse.json(blogs, { status: 200 });
    
  } catch (error) {

    return NextResponse.json({ message: `Error ${error}` }, { status: 500 });

  }
}

export async function POST(request: { json: () => any }) {

  const body = await request.json();

  try {
    await connectToDb();

    await Blog.create(body);

    return NextResponse.json({ message: `Blog Created` }, { status: 201 });

  } catch (error) {

    return NextResponse.json({ message: `Error ${error}` }, { status: 500 });

  }
}