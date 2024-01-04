import Blog from '@/src/lib/(models)/Blog';
import { connectToDb } from '@/src/lib/connectToDb';
import { NextResponse } from 'next/server';

export async function GET(_: any, { params }: { params: { tags: string } }) {
  const tag = params.tags;

  try {
    connectToDb()

    const blogs = await Blog.find({ tag });
    
    return NextResponse.json( blogs , { status: 200 });

  } catch (error) {

    return NextResponse.json({ message: `Error ${error}` }, { status: 500 });
  }

}


