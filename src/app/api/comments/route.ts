import { NextResponse } from 'next/server';
import Comment from '../../../lib/(models)/Comment';
import { connectToDb } from '@/src/lib/connectToDb';

export async function POST(request: { json: () => any }) {
  const body = await request.json();

  try {
    await connectToDb()
  
    await Comment.create(body);
    
    return NextResponse.json({ message: `Comment Created` }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `Error ${error}` }, { status: 500 });
  }
}
